import { TestBed } from '@angular/core/testing';
import { PLATFORM_ID } from '@angular/core';
import { describe, expect, it } from 'vitest';
import { WorkExperience } from './work-experience';
import { provideTesting } from '../../../testing/test-helpers';

describe('WorkExperience', () => {
    function setup(platform: 'browser' | 'server' = 'browser') {
        TestBed.configureTestingModule({
            imports: [WorkExperience],
            providers: [...provideTesting(), { provide: PLATFORM_ID, useValue: platform }],
        });
        const fixture = TestBed.createComponent(WorkExperience);
        fixture.detectChanges();
        return { fixture, component: fixture.componentInstance };
    }

    describe('data model', () => {
        it('ships one experience per tab category', () => {
            const { component } = setup();
            const types = component.experiences.map((e) => e.type);
            expect(types).toEqual(['professional', 'academic', 'personal']);
        });

        it('pairs each experience with a unique translation key index', () => {
            const { component } = setup();
            const ids = component.experiences.map((e) => e.translationKeyIndex);
            expect(new Set(ids).size).toBe(ids.length);
        });

        it('lists at least one technology for every experience', () => {
            const { component } = setup();
            for (const exp of component.experiences) {
                expect(exp.technologies.length).toBeGreaterThan(0);
            }
        });
    });

    describe('default tab', () => {
        it('starts on the professional tab', () => {
            const { component } = setup();
            expect(component.activeTab()).toBe('professional');
        });

        it('filters experiences to the active tab', () => {
            const { component } = setup();
            const filtered = component.filteredExperiences();
            expect(filtered.length).toBe(1);
            expect(filtered[0].type).toBe('professional');
        });

        it('marks the professional tab button as active and aria-selected', () => {
            const { fixture } = setup();
            const tabs = (fixture.nativeElement as HTMLElement).querySelectorAll<HTMLButtonElement>(
                'button.xp__tab',
            );
            expect(tabs[0].classList.contains('is-active')).toBe(true);
            expect(tabs[0].getAttribute('aria-selected')).toBe('true');
            expect(tabs[1].getAttribute('aria-selected')).toBe('false');
        });
    });

    describe('setActiveTab', () => {
        it('switches the active tab when no gsap is available (SSR fallback path)', () => {
            const { component } = setup('server');
            component.setActiveTab('academic');
            expect(component.activeTab()).toBe('academic');
            expect(component.filteredExperiences()[0].type).toBe('academic');
        });

        it('ignores clicks on the already-active tab', () => {
            const { component } = setup('server');
            component.setActiveTab('professional');
            expect(component.activeTab()).toBe('professional');
        });

        it('updates aria-selected and .is-active markers after switching', () => {
            const { fixture, component } = setup('server');
            component.setActiveTab('personal');
            fixture.detectChanges();

            const tabs = (fixture.nativeElement as HTMLElement).querySelectorAll<HTMLButtonElement>(
                'button.xp__tab',
            );
            expect(tabs[0].getAttribute('aria-selected')).toBe('false');
            expect(tabs[2].getAttribute('aria-selected')).toBe('true');
            expect(tabs[2].classList.contains('is-active')).toBe(true);
        });
    });

    describe('panel wiring', () => {
        it('links the tabpanel id to the currently active tab', () => {
            const { fixture, component } = setup('server');
            component.setActiveTab('academic');
            fixture.detectChanges();
            const panel = (fixture.nativeElement as HTMLElement).querySelector('[role="tabpanel"]');
            expect(panel?.getAttribute('id')).toBe('xp-panel-academic');
        });

        it('renders exactly one card — the one matching the active tab', () => {
            const { fixture, component } = setup('server');
            component.setActiveTab('personal');
            fixture.detectChanges();
            const cards = (fixture.nativeElement as HTMLElement).querySelectorAll('.xp-card');
            expect(cards.length).toBe(1);
        });
    });
});
