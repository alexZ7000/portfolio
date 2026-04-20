import { TestBed } from '@angular/core/testing';
import { PLATFORM_ID } from '@angular/core';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { Hero } from './hero';
import { ScrollService } from '../../utils/functions/scroll.service';
import { ThemeService } from '../../utils/functions/theme';
import { mockMatchMedia, MatchMediaMock, provideTesting } from '../../../testing/test-helpers';

describe('Hero', () => {
    let mm: MatchMediaMock;

    beforeEach(() => {
        mm = mockMatchMedia(true);
    });

    afterEach(() => {
        mm.restore();
    });

    function setup(platform: 'browser' | 'server' = 'browser') {
        TestBed.configureTestingModule({
            imports: [Hero],
            providers: [...provideTesting(), { provide: PLATFORM_ID, useValue: platform }],
        });
        const fixture = TestBed.createComponent(Hero);
        fixture.detectChanges();
        return { fixture, component: fixture.componentInstance };
    }

    describe('rendering', () => {
        it('renders the hero section with a dragon animation slot', () => {
            const { fixture } = setup();
            const root = fixture.nativeElement as HTMLElement;
            expect(root.querySelector('section.hero')).toBeTruthy();
            expect(root.querySelector('app-dragon-animation')).toBeTruthy();
        });

        it('exposes two call-to-action buttons for contact and fire breath', () => {
            const { fixture } = setup();
            const buttons = (
                fixture.nativeElement as HTMLElement
            ).querySelectorAll<HTMLButtonElement>('.hero__actions button');
            expect(buttons.length).toBe(2);
        });
    });

    describe('scrollToContact', () => {
        it('routes to the #contact section through ScrollService', () => {
            const { fixture } = setup();
            const scroll = TestBed.inject(ScrollService);
            const spy = vi.spyOn(scroll, 'scrollTo').mockImplementation(() => {});

            (fixture.nativeElement as HTMLElement)
                .querySelectorAll<HTMLButtonElement>('.hero__actions button')[0]
                .click();

            expect(spy).toHaveBeenCalledWith('contact');
        });
    });

    describe('breatheFire', () => {
        it('forwards the click to the dragon child when present', () => {
            const { fixture, component } = setup();
            const dragonSpy = vi.fn();
            (component as unknown as { dragon: { onDragonClick: () => void } }).dragon = {
                onDragonClick: dragonSpy,
            };

            (fixture.nativeElement as HTMLElement)
                .querySelectorAll<HTMLButtonElement>('.hero__actions button')[1]
                .click();

            expect(dragonSpy).toHaveBeenCalledTimes(1);
        });

        it('is a safe no-op when the dragon ViewChild is not yet initialised', () => {
            const { component } = setup();
            (component as unknown as { dragon?: unknown }).dragon = undefined;
            expect(() => component.breatheFire()).not.toThrow();
        });
    });

    describe('isDark', () => {
        it('reflects the ThemeService dark-mode signal', () => {
            const { component } = setup();
            const theme = TestBed.inject(ThemeService);
            expect(component.isDark()).toBe(theme.isDarkTheme());
        });
    });
});
