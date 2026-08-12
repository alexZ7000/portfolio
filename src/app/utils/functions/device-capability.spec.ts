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

    function stubCssSupports(impl: (property: string, value: string) => boolean) {
        (globalThis as { CSS?: unknown }).CSS = { supports: vi.fn(impl) };
    }

    beforeEach(() => {
        mm = mockMatchMedia(false);
        originalCss = globalThis.CSS;
        originalRaf = window.requestAnimationFrame;
        rafQueue = [];

        stubCssSupports(() => true);
        window.requestAnimationFrame = ((cb: FrameRequestCallback) => {
            rafQueue.push(cb);
            return rafQueue.length;
        }) as typeof window.requestAnimationFrame;

        document.body.className = '';
        document.documentElement.className = '';
        try {
            window.localStorage?.removeItem('portfolio:low-end');
            window.localStorage?.removeItem('portfolio:fx-verdict:v2');
            window.sessionStorage?.removeItem('portfolio:fx-verdict:v3');
        } catch {
            void 0;
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

        it('keeps pointer effects when the device is downgraded to low-end', () => {
            const service = make();
            service.markLowEnd();
            expect(service.allowsPointerEffects()).toBe(true);
            expect(service.shouldReduceEffects()).toBe(true);
        });

        it('blocks them on touch devices', () => {
            mm.setMatches(true);
            const service = make();
            expect(service.isTouch()).toBe(true);
            expect(service.allowsPointerEffects()).toBe(false);
        });
    });

    describe('frame rate probe', () => {
        function runProbe(frameDurations: (frame: number) => number, maxFrames: number) {
            vi.useFakeTimers({ toFake: ['setTimeout', 'clearTimeout'] });
            let clock = 0;
            vi.spyOn(performance, 'now').mockImplementation(() => clock);
            try {
                const service = make();
                expect(service.isLowEnd()).toBe(false);

                vi.advanceTimersByTime(8500);
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

        it('downgrades a device that cannot hold the frame rate', () => {
            expect(runProbe(() => 200, 20)).toBe(true);
        });

        it('leaves a machine that keeps up alone', () => {
            expect(runProbe(() => 16, 300)).toBe(false);
        });

        it('tolerates an isolated slow frame', () => {
            expect(runProbe((frame) => (frame === 0 ? 400 : 16), 300)).toBe(false);
        });

        it('leaves a merely modest machine at full effects', () => {
            expect(runProbe(() => 33, 300)).toBe(false);
        });

        it('aborts without a verdict when the page is hidden', () => {
            const original = Object.getOwnPropertyDescriptor(Document.prototype, 'visibilityState');
            Object.defineProperty(document, 'visibilityState', {
                configurable: true,
                get: () => 'hidden',
            });
            try {
                expect(runProbe(() => 200, 20)).toBe(false);
            } finally {
                if (original) {
                    Object.defineProperty(Document.prototype, 'visibilityState', original);
                }
                delete (document as unknown as Record<string, unknown>)['visibilityState'];
            }
        });
    });

    describe('stored verdict', () => {
        it('remembers a downgrade for the rest of the session', () => {
            const service = make();
            service.markLowEnd();
            expect(window.sessionStorage.getItem('portfolio:fx-verdict:v3')).toBe('1');
        });

        it('starts degraded when the session already holds a verdict', () => {
            window.sessionStorage.setItem('portfolio:fx-verdict:v3', '1');
            expect(make().isLowEnd()).toBe(true);
        });

        it('discards the legacy permanent flags from localStorage', () => {
            window.localStorage.setItem('portfolio:low-end', '1');
            window.localStorage.setItem(
                'portfolio:fx-verdict:v2',
                JSON.stringify({ lowEnd: true, at: Date.now() }),
            );
            expect(make().isLowEnd()).toBe(false);
            expect(window.localStorage.getItem('portfolio:low-end')).toBeNull();
            expect(window.localStorage.getItem('portfolio:fx-verdict:v2')).toBeNull();
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
