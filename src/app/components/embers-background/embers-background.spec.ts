import { TestBed } from '@angular/core/testing';
import { PLATFORM_ID } from '@angular/core';
import { describe, expect, it } from 'vitest';
import { EmbersBackgroundComponent } from './embers-background';
import {
    DeviceCapabilityMockOptions,
    makeDeviceCapabilityMock,
    provideTesting,
} from '../../../testing/test-helpers';

describe('EmbersBackgroundComponent', () => {
    function setup(
        platform: 'browser' | 'server' = 'browser',
        capability: DeviceCapabilityMockOptions = {},
    ) {
        const mock = makeDeviceCapabilityMock(capability);
        TestBed.configureTestingModule({
            imports: [EmbersBackgroundComponent],
            providers: [
                ...provideTesting(),
                { provide: PLATFORM_ID, useValue: platform },
                mock.provider,
            ],
        });
        const fixture = TestBed.createComponent(EmbersBackgroundComponent);
        fixture.detectChanges();
        return { fixture, component: fixture.componentInstance, capability: mock.controls };
    }

    describe('browser platform', () => {
        it('populates 18 embers on a full-capability device', () => {
            const { component } = setup();
            expect(component.embers().length).toBe(18);
        });

        it('caps embers at 10 on touch devices', () => {
            const { component } = setup('browser', { isTouch: true });
            expect(component.embers().length).toBe(10);
        });

        it('caps embers at 5 on low-end devices', () => {
            const { component } = setup('browser', { isLowEnd: true });
            expect(component.embers().length).toBe(5);
        });

        it('renders no embers when the user prefers reduced motion', () => {
            const { component } = setup('browser', { prefersReducedMotion: true });
            expect(component.embers().length).toBe(0);
        });

        it('sheds embers when the device is downgraded mid-session', () => {
            const { fixture, component, capability } = setup();
            expect(component.embers().length).toBe(18);

            capability.setLowEnd(true);
            fixture.detectChanges();

            expect(component.embers().length).toBe(5);
            expect((fixture.nativeElement as HTMLElement).querySelectorAll('.ember').length).toBe(
                5,
            );
        });

        it('keeps the surviving embers identical when downgrading', () => {
            const { fixture, component, capability } = setup();
            const before = component.embers().slice(0, 5);

            capability.setLowEnd(true);
            fixture.detectChanges();

            expect(component.embers()).toEqual(before);
        });

        it('renders one .ember element per item in the signal', () => {
            const { fixture, component } = setup();
            const rendered = (fixture.nativeElement as HTMLElement).querySelectorAll('.ember');
            expect(rendered.length).toBe(component.embers().length);
        });

        it('tags each ember as either near or far', () => {
            const { component } = setup();
            for (const ember of component.embers()) {
                expect(['near', 'far']).toContain(ember.depth);
            }
        });

        it('generates percentage-based horizontal positions within 0..100', () => {
            const { component } = setup();
            for (const ember of component.embers()) {
                expect(ember.left.endsWith('%')).toBe(true);
                const n = parseFloat(ember.left);
                expect(n).toBeGreaterThanOrEqual(0);
                expect(n).toBeLessThanOrEqual(100);
            }
        });

        it('uses negative delays so embers begin mid-animation', () => {
            const { component } = setup();
            for (const ember of component.embers()) {
                expect(ember.delay.startsWith('-')).toBe(true);
                expect(ember.delay.endsWith('s')).toBe(true);
            }
        });

        it('scales far embers down to half the size of near embers', () => {
            const { component } = setup();
            const near = component.embers().find((e) => e.depth === 'near');
            const far = component.embers().find((e) => e.depth === 'far');
            if (near) {
                const size = parseFloat(near.width);
                expect(size).toBeGreaterThanOrEqual(2);
                expect(size).toBeLessThanOrEqual(8);
                expect(near.width).toBe(near.height);
            }
            if (far) {
                const size = parseFloat(far.width);
                expect(size).toBeGreaterThanOrEqual(1);
                expect(size).toBeLessThanOrEqual(4);
                expect(far.width).toBe(far.height);
            }
        });
    });

    describe('server platform', () => {
        it('skips the random generation so SSR markup stays empty', () => {
            const { fixture, component } = setup('server');
            expect(component.embers().length).toBe(0);
            expect((fixture.nativeElement as HTMLElement).querySelectorAll('.ember').length).toBe(
                0,
            );
        });
    });
});
