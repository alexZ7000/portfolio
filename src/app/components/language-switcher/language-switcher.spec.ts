import { TestBed } from '@angular/core/testing';
import { PLATFORM_ID } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { LanguageSwitcher } from './language-switcher';
import { provideTesting } from '../../../testing/test-helpers';

describe('LanguageSwitcher', () => {
    afterEach(() => {
        localStorage.clear();
    });

    function setup(opts: { platform?: 'browser' | 'server'; saved?: string; browserLang?: string } = {}) {
        if (opts.saved) localStorage.setItem('language', opts.saved);

        TestBed.configureTestingModule({
            imports: [LanguageSwitcher],
            providers: [
                ...provideTesting(),
                { provide: PLATFORM_ID, useValue: opts.platform ?? 'browser' },
            ],
        });

        const translate = TestBed.inject(TranslateService);
        if (opts.browserLang !== undefined) {
            vi.spyOn(translate, 'getBrowserLang').mockReturnValue(opts.browserLang);
        }

        const fixture = TestBed.createComponent(LanguageSwitcher);
        fixture.detectChanges();
        return { fixture, component: fixture.componentInstance, translate };
    }

    describe('initialization', () => {
        it('uses the locale persisted in localStorage when present', () => {
            const { component, translate } = setup({ saved: 'en' });
            expect(component.currentLang()).toBe('en');
            expect(translate.currentLang).toBe('en');
        });

        it('falls back to the browser locale when no value is stored', () => {
            const { component } = setup({ browserLang: 'en' });
            expect(component.currentLang()).toBe('en');
        });

        it('defaults to "pt" when neither storage nor browser provides a supported lang', () => {
            const { component } = setup({ browserLang: 'jp' });
            expect(component.currentLang()).toBe('pt');
        });

        it('ignores unsupported locales saved in storage', () => {
            const { component } = setup({ saved: 'jp', browserLang: 'pt' });
            expect(component.currentLang()).toBe('pt');
        });

        it('on the server, ignores localStorage and uses the browser fallback', () => {
            localStorage.setItem('language', 'en');
            const { component } = setup({ platform: 'server', browserLang: 'pt' });
            expect(component.currentLang()).toBe('pt');
        });
    });

    describe('switchLanguage()', () => {
        it('updates the active locale and persists to localStorage', () => {
            const { component, translate } = setup({ browserLang: 'pt' });
            const useSpy = vi.spyOn(translate, 'use');
            component.switchLanguage('en');

            expect(component.currentLang()).toBe('en');
            expect(useSpy).toHaveBeenCalledWith('en');
            expect(localStorage.getItem('language')).toBe('en');
        });

        it('is a no-op when re-selecting the active language', () => {
            const { component, translate } = setup({ browserLang: 'pt' });
            const useSpy = vi.spyOn(translate, 'use');
            component.switchLanguage('pt');
            expect(useSpy).not.toHaveBeenCalled();
        });
    });

    describe('rendering', () => {
        it('marks the active button with the .active class and slides the glider', () => {
            const { fixture, component } = setup({ browserLang: 'pt' });
            component.switchLanguage('en');
            fixture.detectChanges();

            const root = fixture.nativeElement as HTMLElement;
            const buttons = root.querySelectorAll<HTMLButtonElement>('.lang-btn');
            expect(buttons[0].classList.contains('active')).toBe(false);
            expect(buttons[1].classList.contains('active')).toBe(true);
            expect(root.querySelector('.switch-glider')?.classList.contains('right')).toBe(true);
        });
    });
});
