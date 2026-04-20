import { TestBed } from '@angular/core/testing';
import { PLATFORM_ID } from '@angular/core';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { CertificatesComponent } from './certificates';
import { provideTesting } from '../../../testing/test-helpers';

describe('CertificatesComponent', () => {
    let openSpy: ReturnType<typeof vi.spyOn>;

    beforeEach(() => {
        openSpy = vi.spyOn(window, 'open').mockImplementation(() => null);
    });

    afterEach(() => {
        openSpy.mockRestore();
    });

    function setup(platform: 'browser' | 'server' = 'browser') {
        TestBed.configureTestingModule({
            imports: [CertificatesComponent],
            providers: [...provideTesting(), { provide: PLATFORM_ID, useValue: platform }],
        });
        const fixture = TestBed.createComponent(CertificatesComponent);
        fixture.detectChanges();
        return { fixture, component: fixture.componentInstance };
    }

    describe('data model', () => {
        it('declares the three portfolio certificates', () => {
            const { component } = setup();
            expect(component.certificates.length).toBe(3);
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
            const card = (fixture.nativeElement as HTMLElement).querySelector<HTMLElement>('.cert-card');
            expect(card?.getAttribute('role')).toBe('button');
            expect(card?.getAttribute('tabindex')).toBe('0');
        });
    });

    describe('openCertificate', () => {
        it('opens valid URLs in a new window with safe rel options', () => {
            const { component } = setup();
            component.openCertificate('https://example.com/cert');
            expect(openSpy).toHaveBeenCalledWith('https://example.com/cert', '_blank', 'noopener,noreferrer');
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
        it('onMouseMove is a no-op when GSAP has not loaded (SSR fallback)', () => {
            const { component } = setup('server');
            expect(() =>
                component.onMouseMove(
                    new MouseEvent('mousemove', { clientX: 50, clientY: 50 }),
                    0,
                ),
            ).not.toThrow();
        });

        it('onMouseLeave is a no-op when GSAP has not loaded (SSR fallback)', () => {
            const { component } = setup('server');
            expect(() => component.onMouseLeave(0)).not.toThrow();
        });
    });
});
