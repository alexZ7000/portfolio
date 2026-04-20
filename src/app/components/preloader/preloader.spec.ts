import { TestBed } from '@angular/core/testing';
import { PLATFORM_ID } from '@angular/core';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { PreloaderComponent } from './preloader';
import {
    FetchMock,
    mockFetch,
    mockMatchMedia,
    MatchMediaMock,
    provideTesting,
} from '../../../testing/test-helpers';

describe('PreloaderComponent', () => {
    let mm: MatchMediaMock;
    let fetchMock: FetchMock | undefined;

    beforeEach(() => {
        mm = mockMatchMedia(true);
    });

    afterEach(() => {
        fetchMock?.restore();
        fetchMock = undefined;
        mm.restore();
    });

    function setup(platform: 'browser' | 'server' = 'server') {
        TestBed.configureTestingModule({
            imports: [PreloaderComponent],
            providers: [...provideTesting(), { provide: PLATFORM_ID, useValue: platform }],
        });
        const fixture = TestBed.createComponent(PreloaderComponent);
        fixture.detectChanges();
        return { fixture, component: fixture.componentInstance };
    }

    describe('server platform', () => {
        it('marks itself done and hidden synchronously so SSR ships no overlay', async () => {
            const { fixture, component } = setup('server');
            await fixture.whenStable();
            expect(component.done()).toBe(true);
            expect(component.hidden()).toBe(true);
        });

        it('removes the preloader node from the DOM once hidden', async () => {
            const { fixture } = setup('server');
            await fixture.whenStable();
            fixture.detectChanges();
            expect((fixture.nativeElement as HTMLElement).querySelector('.preloader')).toBeNull();
        });
    });

    describe('fetch failure', () => {
        it('short-circuits to done/hidden when the SVG asset cannot load', async () => {
            fetchMock = mockFetch(() => ({ status: 500, statusText: 'Server Error' }));
            const { fixture, component } = setup('browser');
            await fixture.whenStable();
            for (let i = 0; i < 10; i++) await Promise.resolve();
            expect(component.done()).toBe(true);
            expect(component.hidden()).toBe(true);
        });
    });

    describe('host bindings', () => {
        it('getters reflect the underlying signals', () => {
            const { component } = setup('server');
            component.done.set(false);
            component.hidden.set(false);
            expect(component.isDone).toBe(false);
            expect(component.isHidden).toBe(false);

            component.done.set(true);
            component.hidden.set(true);
            expect(component.isDone).toBe(true);
            expect(component.isHidden).toBe(true);
        });
    });

    describe('default signal state', () => {
        it('does not hold sanitised SVG before fetch resolves', () => {
            const { component } = setup('server');
            expect(component.svgHtml()).toBeNull();
        });
    });
});
