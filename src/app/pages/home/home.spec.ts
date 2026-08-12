import { TestBed } from '@angular/core/testing';
import { PLATFORM_ID } from '@angular/core';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { Home } from './home';
import { mockMatchMedia, MatchMediaMock, provideTesting } from '../../../testing/test-helpers';

describe('Home', () => {
    let mm: MatchMediaMock;

    beforeEach(() => {
        mm = mockMatchMedia(true);
    });

    afterEach(() => {
        mm.restore();
    });

    async function setup(platform: 'browser' | 'server' = 'server') {
        TestBed.configureTestingModule({
            imports: [Home],
            providers: [...provideTesting(), { provide: PLATFORM_ID, useValue: platform }],
        });
        await TestBed.compileComponents();
        const fixture = TestBed.createComponent(Home);
        fixture.detectChanges();
        return { fixture, component: fixture.componentInstance };
    }

    it('renders above-the-fold sections eagerly under a #main landmark', async () => {
        const { fixture } = await setup();
        const main = (fixture.nativeElement as HTMLElement).querySelector('main#main');
        expect(main).toBeTruthy();

        for (const selector of ['app-embers-background', 'app-hero', 'app-about-me']) {
            expect(main?.querySelector(selector)).toBeTruthy();
        }
    });

    it('defers below-the-fold sections behind viewport-triggered placeholders', async () => {
        const { fixture } = await setup();
        const main = (fixture.nativeElement as HTMLElement).querySelector('main#main');

        expect(main?.querySelector('.home__section-placeholder')).toBeTruthy();
        expect(main?.querySelector('.home__footer-placeholder')).toBeTruthy();
    });

    it('marks the decorative embers layer as aria-hidden', async () => {
        const { fixture } = await setup();
        const embers = (fixture.nativeElement as HTMLElement).querySelector(
            'app-embers-background',
        );
        expect(embers?.getAttribute('aria-hidden')).toBe('true');
    });

    it('keeps the eager sections in the right order', async () => {
        const { fixture } = await setup();
        const main = (fixture.nativeElement as HTMLElement).querySelector('main#main');
        const tagOrder = Array.from(main?.children ?? []).map((el) => el.tagName.toLowerCase());
        const heroIndex = tagOrder.indexOf('app-hero');
        const aboutIndex = tagOrder.indexOf('app-about-me');

        expect(tagOrder.indexOf('app-embers-background')).toBe(0);
        expect(heroIndex).toBeGreaterThanOrEqual(0);
        expect(aboutIndex).toBeGreaterThan(heroIndex);
    });
});
