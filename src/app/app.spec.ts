import { TestBed } from '@angular/core/testing';
import { PLATFORM_ID } from '@angular/core';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { AppComponent } from './app';
import { mockMatchMedia, MatchMediaMock, provideTesting } from '../testing/test-helpers';

describe('AppComponent', () => {
    let mm: MatchMediaMock;

    beforeEach(async () => {
        mm = mockMatchMedia(true);
        await TestBed.configureTestingModule({
            imports: [AppComponent],
            providers: [...provideTesting(), { provide: PLATFORM_ID, useValue: 'browser' }],
        }).compileComponents();
    });

    afterEach(() => mm.restore());

    it('creates the root component', () => {
        const fixture = TestBed.createComponent(AppComponent);
        expect(fixture.componentInstance).toBeTruthy();
    });

    it('renders the preloader, navbar, storage gate and toaster shell eagerly', () => {
        const fixture = TestBed.createComponent(AppComponent);
        fixture.detectChanges();

        const root = fixture.nativeElement as HTMLElement;
        expect(root.querySelector('app-storage-gate')).toBeTruthy();
        expect(root.querySelector('app-preloader')).toBeTruthy();
        expect(root.querySelector('app-navbar')).toBeTruthy();
        expect(root.querySelector('app-toaster-container')).toBeTruthy();
        expect(root.querySelector('router-outlet')).toBeTruthy();
        // app-custom-cursor is behind a @defer (on idle) block so it does not
        // render in the initial pass — it only loads when the browser is idle
        // AND storage is available.
        expect(root.querySelector('app-custom-cursor')).toBeNull();
    });

    it('exposes a "skip to main" link for keyboard users', () => {
        const fixture = TestBed.createComponent(AppComponent);
        fixture.detectChanges();
        const skip = (fixture.nativeElement as HTMLElement).querySelector(
            'a.visually-hidden[href="#main"]',
        );
        expect(skip?.textContent).toMatch(/skip to main content/i);
    });
});
