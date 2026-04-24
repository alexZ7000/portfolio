import { TestBed } from '@angular/core/testing';
import { PLATFORM_ID } from '@angular/core';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { CustomCursorComponent } from './custom-cursor';
import {
    mockMatchMedia,
    MatchMediaMock,
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
        it('updates mouseX/mouseY signals from the event', () => {
            const { component } = setup();
            component.onMouseMove(new MouseEvent('mousemove', { clientX: 120, clientY: 240 }));
            expect(component.mouseX()).toBe(120);
            expect(component.mouseY()).toBe(240);
        });

        it('ignores events when disabled so signals stay at zero', () => {
            const { component } = setup('browser', { isTouch: true });
            component.onMouseMove(new MouseEvent('mousemove', { clientX: 99, clientY: 99 }));
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

            expect(component.isHovering()).toBe(false);
            div.remove();
        });
    });

    describe('mousedown/mouseup', () => {
        it('scales the dot down to 0.8 while the mouse is held', () => {
            const { component } = setup();
            component.onMouseDown();
            expect(component.isClicked()).toBe(true);
            expect(component.dotTransform()).toContain('scale(0.8)');
        });

        it('restores scale(1) on mouseup', () => {
            const { component } = setup();
            component.onMouseDown();
            component.onMouseUp();
            expect(component.isClicked()).toBe(false);
            expect(component.dotTransform()).toContain('scale(1)');
        });
    });

    describe('dot transform', () => {
        it('places the dot at the tracked pointer position', () => {
            const { component } = setup();
            component.onMouseMove(new MouseEvent('mousemove', { clientX: 42, clientY: 84 }));
            expect(component.dotTransform()).toContain('translate3d(42px, 84px, 0)');
        });
    });
});
