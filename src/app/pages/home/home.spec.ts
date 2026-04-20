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

    function setup(platform: 'browser' | 'server' = 'server') {
        TestBed.configureTestingModule({
            imports: [Home],
            providers: [...provideTesting(), { provide: PLATFORM_ID, useValue: platform }],
        });
        const fixture = TestBed.createComponent(Home);
        fixture.detectChanges();
        return { fixture, component: fixture.componentInstance };
    }

    it('composes every portfolio section in order under a #main landmark', () => {
        const { fixture } = setup();
        const main = (fixture.nativeElement as HTMLElement).querySelector('main#main');
        expect(main).toBeTruthy();

        const expected = [
            'app-embers-background',
            'app-hero',
            'app-about-me',
            'app-work-experience',
            'app-certificates',
            'app-contact',
            'app-footer',
        ];
        for (const selector of expected) {
            expect(main?.querySelector(selector)).toBeTruthy();
        }
    });

    it('marks the decorative embers layer as aria-hidden', () => {
        const { fixture } = setup();
        const embers = (fixture.nativeElement as HTMLElement).querySelector('app-embers-background');
        expect(embers?.getAttribute('aria-hidden')).toBe('true');
    });

    it('keeps the sections in the right order', () => {
        const { fixture } = setup();
        const main = (fixture.nativeElement as HTMLElement).querySelector('main#main');
        const tagOrder = Array.from(main?.children ?? []).map((el) => el.tagName.toLowerCase());
        const firstSection = tagOrder.indexOf('app-hero');
        const aboutIndex = tagOrder.indexOf('app-about-me');
        const xpIndex = tagOrder.indexOf('app-work-experience');
        const certsIndex = tagOrder.indexOf('app-certificates');
        const contactIndex = tagOrder.indexOf('app-contact');
        const footerIndex = tagOrder.indexOf('app-footer');

        expect(firstSection).toBeGreaterThanOrEqual(0);
        expect(aboutIndex).toBeGreaterThan(firstSection);
        expect(xpIndex).toBeGreaterThan(aboutIndex);
        expect(certsIndex).toBeGreaterThan(xpIndex);
        expect(contactIndex).toBeGreaterThan(certsIndex);
        expect(footerIndex).toBeGreaterThan(contactIndex);
    });
});
