import { TestBed } from '@angular/core/testing';
import { PLATFORM_ID } from '@angular/core';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { DragonAnimationComponent } from './dragon-animation';
import { ThemeService } from '../../utils/functions/theme';
import { mockMatchMedia, MatchMediaMock, provideTesting } from '../../../testing/test-helpers';

describe('DragonAnimationComponent', () => {
    let mm: MatchMediaMock;

    beforeEach(() => {
        mm = mockMatchMedia(true);
    });

    afterEach(() => {
        mm.restore();
        vi.restoreAllMocks();
    });

    function setup(platform: 'browser' | 'server' = 'server') {
        TestBed.configureTestingModule({
            imports: [DragonAnimationComponent],
            providers: [...provideTesting(), { provide: PLATFORM_ID, useValue: platform }],
        });
        const fixture = TestBed.createComponent(DragonAnimationComponent);
        fixture.detectChanges();
        return { fixture, component: fixture.componentInstance };
    }

    describe('component shell', () => {
        it('constructs without throwing and exposes the theme service', () => {
            const { component } = setup();
            expect(component.themeService).toBeInstanceOf(ThemeService);
        });

        it('renders the dragon SVG template', () => {
            const { fixture } = setup();
            const svg = (fixture.nativeElement as HTMLElement).querySelector('svg');
            expect(svg).toBeTruthy();
        });
    });

    describe('onDragonClick', () => {
        it('is a no-op before GSAP loads (keeps the fire-breath idempotent)', () => {
            const { component } = setup('server');
            expect(() => component.onDragonClick()).not.toThrow();
        });
    });

    describe('ngOnDestroy', () => {
        it('cleans up without throwing when no GSAP context ever initialised', () => {
            const { component } = setup('server');
            expect(() => component.ngOnDestroy()).not.toThrow();
        });
    });
});
