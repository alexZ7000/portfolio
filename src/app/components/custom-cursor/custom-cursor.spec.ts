import { TestBed } from '@angular/core/testing';
import { PLATFORM_ID } from '@angular/core';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { CustomCursorComponent } from './custom-cursor';
import {
    mockMatchMedia,
    MatchMediaMock,
    makeDeviceCapabilityMock,
    provideDeviceCapabilityMock,
    DeviceCapabilityMockOptions,
    provideTesting,
} from '../../../testing/test-helpers';

describe('CustomCursorComponent', () => {
    let mm: MatchMediaMock;
    let originalRaf: typeof window.requestAnimationFrame;
    let originalCancelRaf: typeof window.cancelAnimationFrame;
    let rafQueue: FrameRequestCallback[];

    beforeEach(() => {
        mm = mockMatchMedia(false);
        rafQueue = [];
        originalRaf = window.requestAnimationFrame;
        originalCancelRaf = window.cancelAnimationFrame;

        window.requestAnimationFrame = ((cb: FrameRequestCallback) => {
            rafQueue.push(cb);
            return rafQueue.length;
        }) as typeof window.requestAnimationFrame;
        window.cancelAnimationFrame = (() => {}) as typeof window.cancelAnimationFrame;
    });

    afterEach(() => {
        mm.restore();
        window.requestAnimationFrame = originalRaf;
        window.cancelAnimationFrame = originalCancelRaf;
    });

    /**
     * O componente coalesce os eventos de ponteiro num unico frame: `mousemove`
     * so anota a coordenada e o trabalho (signals, `closest()`, transform)
     * acontece no rAF seguinte. Os testes precisam avancar esse frame.
     */
    function flushFrame() {
        const queued = rafQueue;
        rafQueue = [];
        queued.forEach((cb) => cb(0));
    }

    function setup(
        platform: 'browser' | 'server' = 'browser',
        capability: DeviceCapabilityMockOptions = {},
    ) {
        TestBed.configureTestingModule({
            imports: [CustomCursorComponent],
            providers: [
                ...provideTesting(),
                { provide: PLATFORM_ID, useValue: platform },
                provideDeviceCapabilityMock(capability),
            ],
        });
        const fixture = TestBed.createComponent(CustomCursorComponent);
        fixture.detectChanges();
        return { fixture, component: fixture.componentInstance };
    }

    describe('enablement gate', () => {
        it('enables the cursor when the device supports hover', () => {
            mm.setMatches(false);
            const { component, fixture } = setup();
            expect(component.enabled()).toBe(true);
            expect(
                (fixture.nativeElement as HTMLElement).querySelector('.cursor-dot'),
            ).toBeTruthy();
            expect(
                (fixture.nativeElement as HTMLElement).querySelector('.cursor-outline'),
            ).toBeTruthy();
        });

        it('stays disabled on touch-only (hover: none) devices', () => {
            const { component, fixture } = setup('browser', { isTouch: true });
            expect(component.enabled()).toBe(false);
            expect((fixture.nativeElement as HTMLElement).querySelector('.cursor-dot')).toBeNull();
        });

        it('stays disabled on low-end devices', () => {
            const { component } = setup('browser', { isLowEnd: true });
            expect(component.enabled()).toBe(false);
        });

        it('stays disabled when the user prefers reduced motion', () => {
            const { component } = setup('browser', { prefersReducedMotion: true });
            expect(component.enabled()).toBe(false);
        });

        it('stays disabled on the server regardless of matchMedia', () => {
            const { component } = setup('server');
            expect(component.enabled()).toBe(false);
        });
    });

    describe('mousemove tracking', () => {
        it('updates mouseX/mouseY signals on the next frame', () => {
            const { component } = setup();
            component.onMouseMove(new MouseEvent('mousemove', { clientX: 120, clientY: 240 }));
            flushFrame();
            expect(component.mouseX()).toBe(120);
            expect(component.mouseY()).toBe(240);
        });

        // Este e o ponto da mudanca: o mouse emite eventos mais rapido do que a
        // tela desenha, e cada um custava duas passadas de change detection mais
        // um `closest()` sobre dezesseis seletores.
        it('coalesces a burst of events into a single frame at the last position', () => {
            const { component } = setup();
            // Delta em vez de valor absoluto: o scheduler do Angular tambem usa
            // rAF, entao a fila nao comeca necessariamente vazia.
            const before = rafQueue.length;
            for (let i = 1; i <= 10; i++) {
                component.onMouseMove(new MouseEvent('mousemove', { clientX: i, clientY: i * 2 }));
            }
            expect(rafQueue.length - before).toBe(1);

            flushFrame();
            expect(component.mouseX()).toBe(10);
            expect(component.mouseY()).toBe(20);
        });

        it('ignores events when disabled so signals stay at zero', () => {
            const { component } = setup('browser', { isTouch: true });
            component.onMouseMove(new MouseEvent('mousemove', { clientX: 99, clientY: 99 }));
            flushFrame();
            expect(component.mouseX()).toBe(0);
            expect(component.mouseY()).toBe(0);
        });

        it('flips isHovering when the event target sits inside a recognised interactive node', () => {
            const { component } = setup();
            const button = document.createElement('button');
            document.body.appendChild(button);

            const event = new MouseEvent('mousemove', { clientX: 0, clientY: 0 });
            Object.defineProperty(event, 'target', { value: button });
            component.onMouseMove(event);
            flushFrame();

            expect(component.isHovering()).toBe(true);
            button.remove();
        });

        it('keeps isHovering false over plain body text', () => {
            const { component } = setup();
            const div = document.createElement('div');
            document.body.appendChild(div);

            const event = new MouseEvent('mousemove', { clientX: 0, clientY: 0 });
            Object.defineProperty(event, 'target', { value: div });
            component.onMouseMove(event);
            flushFrame();

            expect(component.isHovering()).toBe(false);
            div.remove();
        });
    });

    describe('frame loop lifecycle', () => {
        // Antes o rAF se reagendava incondicionalmente: o loop rodava a 60fps pra
        // sempre, mesmo com o mouse parado e a aba so sendo lida.
        it('stops scheduling frames once the outline catches up to the pointer', () => {
            const { component } = setup();
            component.onMouseMove(new MouseEvent('mousemove', { clientX: 300, clientY: 300 }));

            let guard = 0;
            while (rafQueue.length && guard++ < 200) flushFrame();

            expect(guard).toBeLessThan(200);
            expect(rafQueue.length).toBe(0);
        });

        it('restarts the loop when the pointer moves again', () => {
            const { component } = setup();
            component.onMouseMove(new MouseEvent('mousemove', { clientX: 10, clientY: 10 }));
            let guard = 0;
            while (rafQueue.length && guard++ < 200) flushFrame();
            expect(rafQueue.length).toBe(0);

            component.onMouseMove(new MouseEvent('mousemove', { clientX: 400, clientY: 400 }));
            expect(rafQueue.length).toBe(1);
        });

        // A sondagem de frame rate roda depois do boot; se ela rebaixar a maquina
        // o cursor precisa sair de cena em vez de manter o loop vivo.
        it('disables itself when the device is downgraded mid-session', () => {
            const mock = makeDeviceCapabilityMock();
            TestBed.configureTestingModule({
                imports: [CustomCursorComponent],
                providers: [
                    ...provideTesting(),
                    { provide: PLATFORM_ID, useValue: 'browser' },
                    mock.provider,
                ],
            });
            const fixture = TestBed.createComponent(CustomCursorComponent);
            fixture.detectChanges();
            const component = fixture.componentInstance;
            expect(component.enabled()).toBe(true);

            mock.controls.setLowEnd(true);
            component.onMouseMove(new MouseEvent('mousemove', { clientX: 5, clientY: 5 }));
            flushFrame();

            expect(component.enabled()).toBe(false);
            expect(document.body.classList.contains('custom-cursor-active')).toBe(false);
        });
    });

    describe('mousedown/mouseup', () => {
        it('flips isClicked while the mouse is held', () => {
            const { component } = setup();
            component.onMouseDown();
            expect(component.isClicked()).toBe(true);
            component.onMouseUp();
            expect(component.isClicked()).toBe(false);
        });

        it('applies the is-clicked class to the inner scaler so CSS can transition the scale smoothly', () => {
            const { component, fixture } = setup();
            component.onMouseDown();
            fixture.detectChanges();
            const scaler = (fixture.nativeElement as HTMLElement).querySelector<HTMLElement>(
                '.cursor-dot__scale',
            );
            expect(scaler?.classList.contains('is-clicked')).toBe(true);

            component.onMouseUp();
            fixture.detectChanges();
            expect(scaler?.classList.contains('is-clicked')).toBe(false);
        });
    });

    describe('dot transform', () => {
        it('places the dot at the tracked pointer position without touching scale', () => {
            const { component } = setup();
            component.onMouseMove(new MouseEvent('mousemove', { clientX: 42, clientY: 84 }));
            flushFrame();
            expect(component.dotTransform()).toContain('translate3d(42px, 84px, 0)');
            expect(component.dotTransform()).not.toContain('scale(');
        });
    });

    describe('text selection mode', () => {
        it('stays in default mode while hovering over a plain paragraph (no text vibe on hover)', () => {
            const { component } = setup();
            const p = document.createElement('p');
            document.body.appendChild(p);
            const move = new MouseEvent('mousemove', { clientX: 0, clientY: 0 });
            Object.defineProperty(move, 'target', { value: p });
            component.onMouseMove(move);
            expect(component.cursorMode()).toBe('default');
            p.remove();
        });

        it('switches to text mode only after mousedown on a text element and reverts on mouseup', () => {
            const { component } = setup();
            const p = document.createElement('p');
            p.textContent = 'selectable copy';
            document.body.appendChild(p);

            const down = new MouseEvent('mousedown');
            Object.defineProperty(down, 'target', { value: p });
            component.onMouseDown(down);
            expect(component.cursorMode()).toBe('text');

            component.onMouseUp();
            expect(component.cursorMode()).toBe('default');
            p.remove();
        });

        it('never enters text mode when the mousedown started on a clickable', () => {
            const { component } = setup();
            const button = document.createElement('button');
            document.body.appendChild(button);
            const down = new MouseEvent('mousedown');
            Object.defineProperty(down, 'target', { value: button });
            component.onMouseDown(down);
            expect(component.cursorMode()).not.toBe('text');
            button.remove();
        });
    });
});
