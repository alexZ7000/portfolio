import { TestBed } from '@angular/core/testing';
import { PLATFORM_ID } from '@angular/core';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { Navbar } from './navbar';
import { ScrollService } from '../../utils/functions/scroll.service';
import { ThemeService } from '../../utils/functions/theme';
import { mockMatchMedia, MatchMediaMock, provideTesting } from '../../../testing/test-helpers';

describe('Navbar', () => {
    let mm: MatchMediaMock;
    let originalRaf: typeof window.requestAnimationFrame;
    let originalCancelRaf: typeof window.cancelAnimationFrame;
    let scrollY = 0;

    beforeEach(() => {
        mm = mockMatchMedia(true);
        Object.defineProperty(window, 'scrollY', { configurable: true, get: () => scrollY });

        originalRaf = window.requestAnimationFrame;
        originalCancelRaf = window.cancelAnimationFrame;
        window.requestAnimationFrame = ((cb: FrameRequestCallback) => {
            cb(performance.now());
            return 1;
        }) as typeof window.requestAnimationFrame;
        window.cancelAnimationFrame = (() => {}) as typeof window.cancelAnimationFrame;
    });

    afterEach(() => {
        mm.restore();
        window.requestAnimationFrame = originalRaf;
        window.cancelAnimationFrame = originalCancelRaf;
        scrollY = 0;
    });

    function setup(platform: 'browser' | 'server' = 'browser') {
        TestBed.configureTestingModule({
            imports: [Navbar],
            providers: [...provideTesting(), { provide: PLATFORM_ID, useValue: platform }],
        });
        const fixture = TestBed.createComponent(Navbar);
        fixture.detectChanges();
        return { fixture, component: fixture.componentInstance };
    }

    describe('rendering', () => {
        it('renders desktop nav links and a single mobile toggle', () => {
            const { fixture } = setup();
            const root = fixture.nativeElement as HTMLElement;
            expect(root.querySelectorAll('.navbar__nav--desktop button').length).toBeGreaterThan(0);
            expect(root.querySelector('button.navbar__toggle')).toBeTruthy();
        });

        it('does not render the mobile menu by default', () => {
            const { fixture } = setup();
            expect(
                (fixture.nativeElement as HTMLElement).querySelector('.navbar__mobile'),
            ).toBeNull();
        });
    });

    describe('mobile menu', () => {
        it('toggles open and closed and updates aria-expanded', () => {
            const { fixture, component } = setup();
            const toggle = (fixture.nativeElement as HTMLElement).querySelector(
                'button.navbar__toggle',
            ) as HTMLButtonElement;

            toggle.click();
            fixture.detectChanges();
            expect(component.isMobileMenuOpen()).toBe(true);
            expect(toggle.getAttribute('aria-expanded')).toBe('true');
            expect(
                (fixture.nativeElement as HTMLElement).querySelector('.navbar__mobile'),
            ).toBeTruthy();

            toggle.click();
            fixture.detectChanges();
            expect(component.isMobileMenuOpen()).toBe(false);
        });

        it('closes the mobile menu after navigating to a section', () => {
            const { fixture, component } = setup();
            const scroll = TestBed.inject(ScrollService);
            const scrollSpy = vi.spyOn(scroll, 'scrollTo').mockImplementation(() => {});

            component.toggleMobileMenu();
            component.scrollTo('about-me');

            expect(component.isMobileMenuOpen()).toBe(false);
            expect(scrollSpy).toHaveBeenCalledWith('about-me');
        });
    });

    describe('scroll detection', () => {
        it('flips isScrolled to true past 50px', () => {
            const { component } = setup();
            scrollY = 100;
            component.onWindowScroll();
            expect(component.isScrolled()).toBe(true);
        });

        it('keeps isScrolled false at or below 50px', () => {
            const { component } = setup();
            scrollY = 50;
            component.onWindowScroll();
            expect(component.isScrolled()).toBe(false);
        });

        it('is a no-op on the server', () => {
            const { component } = setup('server');
            scrollY = 200;
            expect(() => component.onWindowScroll()).not.toThrow();
            expect(component.isScrolled()).toBe(false);
        });
    });

    describe('theme switching', () => {
        it('reads from ThemeService for the logo source (png fallback + webp source)', () => {
            const { fixture } = setup();
            const theme = TestBed.inject(ThemeService);
            const root = fixture.nativeElement as HTMLElement;

            const logo = root.querySelector('img') as HTMLImageElement;
            const webpSource = root.querySelector('source[type="image/webp"]') as HTMLSourceElement;

            const expectedPng = theme.isDarkTheme()
                ? 'assets/logoWhite.png'
                : 'assets/logoBlack.png';
            const expectedWebp = theme.isDarkTheme()
                ? 'assets/logoWhite.webp'
                : 'assets/logoBlack.webp';

            expect(logo.getAttribute('src')).toBe(expectedPng);
            expect(webpSource.getAttribute('srcset')).toBe(expectedWebp);
            expect(logo.getAttribute('fetchpriority')).toBe('high');
            expect(logo.getAttribute('width')).toBe('600');
            expect(logo.getAttribute('height')).toBe('58');
        });
    });
});
