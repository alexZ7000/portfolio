import { TestBed } from '@angular/core/testing';
import { PLATFORM_ID } from '@angular/core';
import { afterEach, describe, expect, it } from 'vitest';
import { ThemeService } from './theme';

describe('ThemeService', () => {
    afterEach(() => {
        document.body.className = '';
    });

    function provide(platform: 'browser' | 'server' = 'browser') {
        TestBed.configureTestingModule({
            providers: [ThemeService, { provide: PLATFORM_ID, useValue: platform }],
        });
        return TestBed.inject(ThemeService);
    }

    describe('initial state', () => {
        it('boots in dark mode and applies the dark-theme body class', () => {
            const svc = provide('browser');
            expect(svc.isDarkTheme()).toBe(true);
            expect(document.body.classList.contains('dark-theme')).toBe(true);
            expect(document.body.classList.contains('light-theme')).toBe(false);
        });
    });

    describe('toggle()', () => {
        it('flips the theme and updates body classes', () => {
            const svc = provide('browser');
            svc.toggle();
            expect(svc.isDarkTheme()).toBe(false);
            expect(document.body.classList.contains('light-theme')).toBe(true);
            expect(document.body.classList.contains('dark-theme')).toBe(false);

            svc.toggle();
            expect(svc.isDarkTheme()).toBe(true);
            expect(document.body.classList.contains('dark-theme')).toBe(true);
        });
    });

    describe('SSR safety', () => {
        it('does not touch document.body when on the server', () => {
            const svc = provide('server');
            expect(svc.isDarkTheme()).toBe(true);
            expect(document.body.classList.contains('dark-theme')).toBe(false);
        });
    });
});
