import { TestBed } from '@angular/core/testing';
import { PLATFORM_ID } from '@angular/core';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { CertificatesComponent } from './certificates';
import {
    DeviceCapabilityMockOptions,
    makeDeviceCapabilityMock,
    provideTesting,
} from '../../../testing/test-helpers';

describe('CertificatesComponent', () => {
    let openSpy: ReturnType<typeof vi.spyOn>;
    let originalRaf: typeof window.requestAnimationFrame;
    let originalCancelRaf: typeof window.cancelAnimationFrame;
    let rafQueue: FrameRequestCallback[];

    beforeEach(() => {
        openSpy = vi.spyOn(window, 'open').mockImplementation(() => null);
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
        openSpy.mockRestore();
        window.requestAnimationFrame = originalRaf;
        window.cancelAnimationFrame = originalCancelRaf;
    });

    function flushFrame() {
        const queued = rafQueue;
        rafQueue = [];
        queued.forEach((cb) => cb(0));
    }

    function setup(platform: 'browser' | 'server' = 'browser') {
        TestBed.configureTestingModule({
            imports: [CertificatesComponent],
            providers: [...provideTesting(), { provide: PLATFORM_ID, useValue: platform }],
        });
        const fixture = TestBed.createComponent(CertificatesComponent);
        fixture.detectChanges();
        return { fixture, component: fixture.componentInstance };
    }

    function setupTilt(capability: DeviceCapabilityMockOptions = {}) {
        const mock = makeDeviceCapabilityMock(capability);
        TestBed.configureTestingModule({
            imports: [CertificatesComponent],
            providers: [
                ...provideTesting(),
                { provide: PLATFORM_ID, useValue: 'browser' },
                mock.provider,
            ],
        });
        const fixture = TestBed.createComponent(CertificatesComponent);
        fixture.detectChanges();
        const component = fixture.componentInstance;

        for (const ref of component.cardRefs) {
            vi.spyOn(ref.nativeElement, 'getBoundingClientRect').mockReturnValue({
                x: 0,
                y: 0,
                top: 0,
                left: 0,
                right: 300,
                bottom: 200,
                width: 300,
                height: 200,
                toJSON: () => ({}),
            } as DOMRect);
        }

        return { fixture, component, capability: mock.controls };
    }

    describe('data model', () => {
        it('declares at least three portfolio certificates', () => {
            const { component } = setup();
            expect(component.certificates.length).toBeGreaterThanOrEqual(3);
        });

        it('gives each certificate a name, issuer and year', () => {
            const { component } = setup();
            for (const cert of component.certificates) {
                expect(cert.name.length).toBeGreaterThan(0);
                expect(cert.issuer.length).toBeGreaterThan(0);
                expect(cert.date).toMatch(/^\d{4}$/);
            }
        });
    });

    describe('rendering', () => {
        it('renders one card per certificate with an accessible label', () => {
            const { fixture, component } = setup();
            const cards = (fixture.nativeElement as HTMLElement).querySelectorAll<HTMLElement>(
                '.cert-card',
            );
            expect(cards.length).toBe(component.certificates.length);
            expect(cards[0].getAttribute('aria-label')).toContain(component.certificates[0].name);
            expect(cards[0].getAttribute('aria-label')).toContain(component.certificates[0].issuer);
        });

        it('marks cards as keyboard-reachable with role=button and tabindex=0', () => {
            const { fixture } = setup();
            const card = (fixture.nativeElement as HTMLElement).querySelector<HTMLElement>(
                '.cert-card',
            );
            expect(card?.getAttribute('role')).toBe('button');
            expect(card?.getAttribute('tabindex')).toBe('0');
        });
    });

    describe('openCertificate', () => {
        it('opens valid URLs in a new window with safe rel options', () => {
            const { component } = setup();
            component.openCertificate('https://example.com/cert');
            expect(openSpy).toHaveBeenCalledWith(
                'https://example.com/cert',
                '_blank',
                'noopener,noreferrer',
            );
        });

        it('ignores placeholder "#" links to avoid opening blank tabs', () => {
            const { component } = setup();
            component.openCertificate('#');
            component.openCertificate('');
            expect(openSpy).not.toHaveBeenCalled();
        });

        it('does nothing on the server', () => {
            const { component } = setup('server');
            component.openCertificate('https://example.com');
            expect(openSpy).not.toHaveBeenCalled();
        });
    });

    describe('tilt handlers', () => {
        it('onMouseMove is a no-op on the server', () => {
            const { component } = setup('server');
            expect(() =>
                component.onMouseMove(new MouseEvent('mousemove', { clientX: 50, clientY: 50 }), 0),
            ).not.toThrow();
        });

        it('onMouseLeave is a no-op on the server', () => {
            const { component } = setup('server');
            expect(() => component.onMouseLeave(0)).not.toThrow();
        });

        it('measures the card once on enter and never again while moving', () => {
            const { component } = setupTilt();
            const card = component.cardRefs.get(0)!.nativeElement;
            const measure = card.getBoundingClientRect as ReturnType<typeof vi.fn>;

            component.onMouseEnter(0);
            expect(measure).toHaveBeenCalledTimes(1);

            for (let i = 0; i < 12; i++) {
                component.onMouseMove(
                    new MouseEvent('mousemove', { clientX: 10 + i, clientY: 10 + i }),
                    0,
                );
                flushFrame();
            }
            expect(measure).toHaveBeenCalledTimes(1);
        });

        it('ignores a card that has no measured area yet', () => {
            const { component } = setupTilt();
            const card = component.cardRefs.get(0)!.nativeElement;
            (card.getBoundingClientRect as ReturnType<typeof vi.fn>).mockReturnValue({
                width: 0,
                height: 0,
                top: 0,
                left: 0,
                toJSON: () => ({}),
            } as DOMRect);

            component.onMouseEnter(0);
            component.onMouseMove(new MouseEvent('mousemove', { clientX: 10, clientY: 10 }), 0);
            flushFrame();

            expect(card.style.transform).toBe('');
        });

        it('coalesces a burst of moves into one frame', () => {
            const { component } = setupTilt();
            component.onMouseEnter(0);

            const before = rafQueue.length;
            for (let i = 0; i < 12; i++) {
                component.onMouseMove(new MouseEvent('mousemove', { clientX: i, clientY: i }), 0);
            }
            expect(rafQueue.length - before).toBe(1);
        });

        it('writes the tilt transform on the card when the frame runs', () => {
            const { component } = setupTilt();
            component.onMouseEnter(0);
            component.onMouseMove(new MouseEvent('mousemove', { clientX: 10, clientY: 10 }), 0);
            flushFrame();

            const card = component.cardRefs.get(0)!.nativeElement;
            expect(card.style.transform).toContain('rotateX(');
            expect(card.style.transform).toContain('rotateY(');
        });

        it('clears the transform on leave so CSS can ease it back to rest', () => {
            const { component } = setupTilt();
            component.onMouseEnter(0);
            component.onMouseMove(new MouseEvent('mousemove', { clientX: 10, clientY: 10 }), 0);
            flushFrame();

            component.onMouseLeave(0);
            const card = component.cardRefs.get(0)!.nativeElement;
            expect(card.style.transform).toBe('');
            expect(card.classList.contains('is-tilting')).toBe(false);
        });

        it('does not tilt on touch devices', () => {
            const { component } = setupTilt({ isTouch: true });
            component.onMouseEnter(0);
            component.onMouseMove(new MouseEvent('mousemove', { clientX: 10, clientY: 10 }), 0);
            flushFrame();

            expect(component.cardRefs.get(0)!.nativeElement.style.transform).toBe('');
        });

        it('does not tilt when the user prefers reduced motion', () => {
            const { component } = setupTilt({ prefersReducedMotion: true });
            component.onMouseEnter(0);
            component.onMouseMove(new MouseEvent('mousemove', { clientX: 10, clientY: 10 }), 0);
            flushFrame();

            expect(component.cardRefs.get(0)!.nativeElement.style.transform).toBe('');
        });

        it('keeps tilting when the device is downgraded to low-end mid-hover', () => {
            const { component, capability } = setupTilt();
            component.onMouseEnter(0);
            component.onMouseMove(new MouseEvent('mousemove', { clientX: 10, clientY: 10 }), 0);
            flushFrame();
            const card = component.cardRefs.get(0)!.nativeElement;
            expect(card.style.transform).not.toBe('');

            capability.setLowEnd(true);
            component.onMouseMove(new MouseEvent('mousemove', { clientX: 30, clientY: 30 }), 0);
            flushFrame();

            expect(card.style.transform).not.toBe('');
        });

        it('drops the tilt when reduced motion is requested mid-hover', () => {
            const { component, capability } = setupTilt();
            component.onMouseEnter(0);
            component.onMouseMove(new MouseEvent('mousemove', { clientX: 10, clientY: 10 }), 0);
            flushFrame();
            const card = component.cardRefs.get(0)!.nativeElement;
            expect(card.style.transform).not.toBe('');

            capability.setReducedMotion(true);
            component.onMouseMove(new MouseEvent('mousemove', { clientX: 30, clientY: 30 }), 0);
            flushFrame();

            expect(card.style.transform).toBe('');
        });
    });
});
