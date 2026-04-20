import { TestBed } from '@angular/core/testing';
import { PLATFORM_ID } from '@angular/core';
import { describe, expect, it } from 'vitest';
import { AboutMe } from './about-me';
import { provideTesting } from '../../../testing/test-helpers';

describe('AboutMe', () => {
    function setup(platform: 'browser' | 'server' = 'server') {
        TestBed.configureTestingModule({
            imports: [AboutMe],
            providers: [...provideTesting(), { provide: PLATFORM_ID, useValue: platform }],
        });
        const fixture = TestBed.createComponent(AboutMe);
        fixture.detectChanges();
        return { fixture, component: fixture.componentInstance };
    }

    describe('skills catalogue', () => {
        it('advertises 15 skills', () => {
            const { component } = setup();
            expect(component.skills.length).toBe(15);
        });

        it('does not duplicate skill names', () => {
            const { component } = setup();
            const names = component.skills.map((s) => s.name);
            expect(new Set(names).size).toBe(names.length);
        });

        it('attaches an icon class and hex colour to every skill', () => {
            const { component } = setup();
            for (const skill of component.skills) {
                expect(skill.icon.length).toBeGreaterThan(0);
                expect(skill.color).toMatch(/^#[0-9a-f]{3,8}$/i);
            }
        });
    });

    describe('rendering', () => {
        it('renders one .skill-card per skill', () => {
            const { fixture, component } = setup();
            const cards = (fixture.nativeElement as HTMLElement).querySelectorAll('.skill-card');
            expect(cards.length).toBe(component.skills.length);
        });

        it('threads the per-skill brand colour into a CSS custom property', () => {
            const { fixture, component } = setup();
            const card = (fixture.nativeElement as HTMLElement).querySelector<HTMLElement>('.skill-card');
            expect(card?.style.getPropertyValue('--skill-color')).toBe(component.skills[0].color);
        });

        it('labels the section and skills list with translated headings', () => {
            const { fixture } = setup();
            const root = fixture.nativeElement as HTMLElement;
            expect(root.querySelector('#about-title')).toBeTruthy();
            expect(root.querySelector('#skills-title')).toBeTruthy();
        });
    });

    describe('SSR safety', () => {
        it('does not throw when detected for server rendering', () => {
            expect(() => setup('server')).not.toThrow();
        });
    });
});
