import { TestBed } from '@angular/core/testing';
import { PLATFORM_ID } from '@angular/core';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { DeviceCapabilityService } from './device-capability';
import { mockMatchMedia, MatchMediaMock } from '../../../testing/test-helpers';

describe('DeviceCapabilityService', () => {
    let mm: MatchMediaMock;
    let originalCss: typeof globalThis.CSS | undefined;
    let originalRaf: typeof window.requestAnimationFrame;
    let rafQueue: FrameRequestCallback[];

    /** jsdom nao expoe `CSS` — o objeto inteiro precisa ser simulado. */
    function stubCssSupports(impl: (property: string, value: string) => boolean) {
        (globalThis as { CSS?: unknown }).CSS = { supports: vi.fn(impl) };
    }

    beforeEach(() => {
        mm = mockMatchMedia(false);
        originalCss = globalThis.CSS;
        originalRaf = window.requestAnimationFrame;
        rafQueue = [];

        // Por padrao o "navegador" de teste tem tudo; cada caso simula a falta.
        stubCssSupports(() => true);
        window.requestAnimationFrame = ((cb: FrameRequestCallback) => {
            rafQueue.push(cb);
            return rafQueue.length;
        }) as typeof window.requestAnimationFrame;

        document.body.className = '';
        document.documentElement.className = '';
        try {
            window.localStorage?.removeItem('portfolio:low-end');
        } catch {
            // storage indisponivel no runner — os testes que dependem dele saem cedo
        }
    });

    afterEach(() => {
        mm.restore();
        if (originalCss === undefined) delete (globalThis as { CSS?: unknown }).CSS;
        else globalThis.CSS = originalCss;
        window.requestAnimationFrame = originalRaf;
        document.body.className = '';
        document.documentElement.className = '';
    });

    function make(platform: 'browser' | 'server' = 'browser') {
        TestBed.configureTestingModule({
            providers: [{ provide: PLATFORM_ID, useValue: platform }],
        });
        return TestBed.inject(DeviceCapabilityService);
    }

    describe('feature detection', () => {
        it('reports full support when the engine has backdrop-filter and blend modes', () => {
            const service = make();
            expect(service.supportsBackdropFilter()).toBe(true);
            expect(service.supportsBlendModes()).toBe(true);
            expect(service.isLowEnd()).toBe(false);
        });

        it('falls back to reduced effects when the engine has neither', () => {
            stubCssSupports(() => false);
            const service = make();
            expect(service.supportsBackdropFilter()).toBe(false);
            expect(service.supportsBlendModes()).toBe(false);
            expect(service.isLowEnd()).toBe(true);
        });

        it('survives an engine with no CSS.supports at all', () => {
            delete (globalThis as { CSS?: unknown }).CSS;
            const service = make();
            expect(service.supportsBackdropFilter()).toBe(false);
            expect(service.isLowEnd()).toBe(true);
        });
    });

    describe('body classes', () => {
        it('marks the page as rich only when everything is available', () => {
            make();
            TestBed.tick();
            expect(document.body.classList.contains('fx-rich')).toBe(true);
            expect(document.body.classList.contains('is-low-end')).toBe(false);
        });

        it('drops fx-rich and flags the missing feature when blend modes are gone', () => {
            stubCssSupports((property) => !property.includes('blend'));
            make();
            TestBed.tick();
            expect(document.body.classList.contains('fx-rich')).toBe(false);
            expect(document.body.classList.contains('no-blend-modes')).toBe(true);
        });

        // `scroll-behavior` so tem efeito no elemento que rola, que e o <html>.
        it('mirrors the low-end flag onto the document element', () => {
            const service = make();
            service.markLowEnd();
            TestBed.tick();
            expect(document.documentElement.classList.contains('is-low-end')).toBe(true);
        });
    });

    describe('pointer effects gate', () => {
        it('allows pointer effects on a healthy pointer device', () => {
            expect(make().allowsPointerEffects()).toBe(true);
        });

        it('blocks them once the device is downgraded', () => {
            const service = make();
            service.markLowEnd();
            expect(service.allowsPointerEffects()).toBe(false);
            expect(service.shouldReduceEffects()).toBe(true);
        });

        it('blocks them on touch devices even at full capability', () => {
            mm.setMatches(true);
            const service = make();
            expect(service.isTouch()).toBe(true);
            expect(service.allowsPointerEffects()).toBe(false);
        });
    });

    describe('frame rate probe', () => {
        /**
         * Roda a sondagem com um relogio controlado.
         *
         * Dois detalhes que, se errados, fazem o teste passar sem testar nada:
         * so `setTimeout` e falsificado — o default do vitest tambem substitui
         * `requestAnimationFrame`, o que engoliria os frames antes deles
         * chegarem na fila daqui; e `performance.now` precisa estar preso ANTES
         * do timer de arranque, senao a sondagem grava o instante real como
         * marco zero e nenhum frame simulado cai dentro da janela de medicao.
         *
         * `frameDurations` e chamada por indice, entao um caso pode misturar uma
         * travada isolada com frames saudaveis.
         */
        function runProbe(frameDurations: (frame: number) => number, maxFrames: number) {
            vi.useFakeTimers({ toFake: ['setTimeout', 'clearTimeout'] });
            let clock = 0;
            vi.spyOn(performance, 'now').mockImplementation(() => clock);
            try {
                const service = make();
                expect(service.isLowEnd()).toBe(false);

                vi.advanceTimersByTime(2000); // deixa a sondagem arrancar
                expect(rafQueue.length).toBeGreaterThan(0);

                for (let i = 0; i < maxFrames && rafQueue.length; i++) {
                    clock += frameDurations(i);
                    const queued = rafQueue;
                    rafQueue = [];
                    queued.forEach((cb) => cb(clock));
                }
                return service.isLowEnd();
            } finally {
                vi.restoreAllMocks();
                vi.useRealTimers();
            }
        }

        it('downgrades the device after a run of stalled frames', () => {
            // 200ms por frame: bem acima do limite de engasgo.
            expect(runProbe(() => 200, 10)).toBe(true);
        });

        it('leaves a machine that keeps up alone', () => {
            // ~60fps ate a janela de medicao fechar.
            expect(runProbe(() => 16, 300)).toBe(false);
        });

        // Uma travada isolada nao condena a maquina — o boot e cheio delas.
        it('tolerates an isolated slow frame', () => {
            expect(runProbe((frame) => (frame === 0 ? 300 : 16), 300)).toBe(false);
        });

        // Sem engasgos gritantes, mas entregando ~25fps: e o caso do desktop com
        // GPU integrada, que a deteccao antiga (so saveData/effectiveType) nunca
        // enxergava.
        it('downgrades a machine that is merely slow, with no single stalled frame', () => {
            expect(runProbe(() => 40, 300)).toBe(true);
        });
    });

    describe('server platform', () => {
        it('stays inert so SSR renders the full-capability markup', () => {
            const service = make('server');
            expect(service.isLowEnd()).toBe(false);
            expect(service.prefersReducedMotion()).toBe(false);
            expect(service.isTouch()).toBe(false);
        });
    });
});
