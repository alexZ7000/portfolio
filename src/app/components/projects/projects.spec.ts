import { TestBed } from '@angular/core/testing';
import { PLATFORM_ID } from '@angular/core';
import { describe, expect, it } from 'vitest';
import { ProjectsComponent } from './projects';
import { provideTesting } from '../../../testing/test-helpers';

describe('ProjectsComponent', () => {
    function setup(platform: 'browser' | 'server' = 'browser') {
        TestBed.configureTestingModule({
            imports: [ProjectsComponent],
            providers: [...provideTesting(), { provide: PLATFORM_ID, useValue: platform }],
        });
        const fixture = TestBed.createComponent(ProjectsComponent);
        fixture.detectChanges();
        return { fixture, component: fixture.componentInstance };
    }

    describe('data model', () => {
        it('ships a handful of curated projects', () => {
            const { component } = setup();
            expect(component.projects.length).toBeGreaterThanOrEqual(3);
        });

        it('assigns a unique id to every project', () => {
            const { component } = setup();
            const ids = component.projects.map((p) => p.id);
            expect(new Set(ids).size).toBe(ids.length);
        });

        it('pairs every project with at least one technology and one link', () => {
            const { component } = setup();
            for (const project of component.projects) {
                expect(project.technologies.length).toBeGreaterThan(0);
                expect(project.links.length).toBeGreaterThan(0);
            }
        });

        it('has at most one featured project so the spotlight stays meaningful', () => {
            const { component } = setup();
            const featured = component.projects.filter((p) => p.featured);
            expect(featured.length).toBeLessThanOrEqual(1);
        });

        it('points every link at an external https GitHub URL', () => {
            const { component } = setup();
            for (const project of component.projects) {
                for (const link of project.links) {
                    expect(link.url.startsWith('https://github.com/')).toBe(true);
                }
            }
        });
    });

    describe('rendering', () => {
        it('renders one card per project', () => {
            const { fixture, component } = setup();
            const cards = (fixture.nativeElement as HTMLElement).querySelectorAll('.project-card');
            expect(cards.length).toBe(component.projects.length);
        });

        it('marks featured projects with the is-featured class and a badge', () => {
            const { fixture, component } = setup();
            const featured = component.projects.findIndex((p) => p.featured);
            if (featured === -1) return;
            const cards = (fixture.nativeElement as HTMLElement).querySelectorAll('.project-card');
            expect(cards[featured].classList.contains('is-featured')).toBe(true);
            expect(cards[featured].querySelector('.project-card__badge')).toBeTruthy();
        });

        it('opens every external link safely (noopener, new tab)', () => {
            const { fixture } = setup();
            const links = (
                fixture.nativeElement as HTMLElement
            ).querySelectorAll<HTMLAnchorElement>('.project-card__link');
            expect(links.length).toBeGreaterThan(0);
            links.forEach((a) => {
                expect(a.getAttribute('target')).toBe('_blank');
                expect(a.getAttribute('rel')).toContain('noopener');
            });
        });
    });
});
