import { TestBed } from '@angular/core/testing';
import { PLATFORM_ID } from '@angular/core';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { mockMatchMedia, MatchMediaMock } from '../../../testing/test-helpers';
import { ThemeService } from './theme';

describe('ThemeService', () => {
    let mm: MatchMediaMock;

    afterEach(() => {
        mm?.restore();
        document.body.className = '';
    });

    function provide(platform: 'browser' | 'server' = 'browser') {
        TestBed.configureTestingModule({
            providers: [ThemeService, { provide: PLATFORM_ID, useValue: platform }],
        });
        return TestBed.inject(ThemeService);
    }

    describe('initial detection', () => {
        it('starts in dark mode when prefers-color-scheme: dark matches', () => {
            mm = mockMatchMedia(true);
            const svc = provide('browser');
            expect(svc.isDarkTheme()).toBe(true);
            expect(document.body.classList.contains('dark-theme')).toBe(true);
            expect(document.body.classList.contains('light-theme')).toBe(false);
        });

        it('starts in light mode when prefers-color-scheme: dark does not match', () => {
            mm = mockMatchMedia(false);
            const svc = provide('browser');
            expect(svc.isDarkTheme()).toBe(false);
            expect(document.body.classList.contains('light-theme')).toBe(true);
            expect(document.body.classList.contains('dark-theme')).toBe(false);
        });
    });

    describe('toggle()', () => {
        beforeEach(() => {
            mm = mockMatchMedia(true);
        });

        it('flips the theme and updates body classes', () => {
            const svc = provide('browser');
            svc.toggle();
            expect(svc.isDarkTheme()).toBe(false);
            expect(document.body.classList.contains('light-theme')).toBe(true);

            svc.toggle();
            expect(svc.isDarkTheme()).toBe(true);
            expect(document.body.classList.contains('dark-theme')).toBe(true);
        });
    });

    describe('OS preference change', () => {
        it('updates the signal when the media query emits a change', () => {
            mm = mockMatchMedia(true);
            const svc = provide('browser');
            expect(svc.isDarkTheme()).toBe(true);

            mm.setMatches(false);
            expect(svc.isDarkTheme()).toBe(false);
            expect(document.body.classList.contains('light-theme')).toBe(true);
        });
    });

    describe('SSR safety', () => {
        it('does not touch matchMedia or document.body when on the server', () => {
            mm = mockMatchMedia(true);
            const svc = provide('server');
            expect(svc.isDarkTheme()).toBe(true);
            expect(document.body.classList.contains('dark-theme')).toBe(false);
        });
    });
});
