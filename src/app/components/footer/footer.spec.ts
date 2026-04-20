import { TestBed } from '@angular/core/testing';
import { describe, expect, it, vi } from 'vitest';
import { FooterComponent } from './footer';
import { ScrollService } from '../../utils/functions/scroll.service';
import { provideTesting } from '../../../testing/test-helpers';

describe('FooterComponent', () => {
    function setup() {
        TestBed.configureTestingModule({
            imports: [FooterComponent],
            providers: provideTesting(),
        });
        const fixture = TestBed.createComponent(FooterComponent);
        fixture.detectChanges();
        return { fixture, component: fixture.componentInstance };
    }

    describe('socials data', () => {
        it('exposes LinkedIn, GitHub and WhatsApp links', () => {
            const { component } = setup();
            const labels = component.socials.map((s) => s.label);
            expect(labels).toEqual(['LinkedIn', 'GitHub', 'WhatsApp']);
        });

        it('only uses absolute https URLs for socials', () => {
            const { component } = setup();
            for (const social of component.socials) {
                expect(social.url.startsWith('https://')).toBe(true);
            }
        });
    });

    describe('rendering', () => {
        it('renders one anchor per social with aria-label and safe rel', () => {
            const { fixture, component } = setup();
            const anchors = (fixture.nativeElement as HTMLElement).querySelectorAll<HTMLAnchorElement>(
                '.social-links a',
            );
            expect(anchors.length).toBe(component.socials.length);
            for (const [i, a] of Array.from(anchors).entries()) {
                expect(a.getAttribute('aria-label')).toBe(component.socials[i].label);
                expect(a.getAttribute('target')).toBe('_blank');
                expect(a.getAttribute('rel')).toContain('noopener');
                expect(a.getAttribute('rel')).toContain('noreferrer');
            }
        });

        it('includes a back-to-top button with an accessible label', () => {
            const { fixture } = setup();
            const button = (fixture.nativeElement as HTMLElement).querySelector<HTMLButtonElement>(
                'button.back-to-top',
            );
            expect(button).toBeTruthy();
            expect(button?.getAttribute('aria-label')).toBe('Back to Top');
        });
    });

    describe('scrollToTop', () => {
        it('delegates to ScrollService.scrollToTop when the button is clicked', () => {
            const { fixture } = setup();
            const scroll = TestBed.inject(ScrollService);
            const spy = vi.spyOn(scroll, 'scrollToTop').mockImplementation(() => {});

            (fixture.nativeElement as HTMLElement)
                .querySelector<HTMLButtonElement>('button.back-to-top')!
                .click();

            expect(spy).toHaveBeenCalledTimes(1);
        });
    });
});
