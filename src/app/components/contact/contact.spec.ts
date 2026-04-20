import { TestBed } from '@angular/core/testing';
import { describe, expect, it } from 'vitest';
import { ContactComponent } from './contact';
import { provideTesting } from '../../../testing/test-helpers';

describe('ContactComponent', () => {
    function setup() {
        TestBed.configureTestingModule({
            imports: [ContactComponent],
            providers: provideTesting(),
        });
        const fixture = TestBed.createComponent(ContactComponent);
        fixture.detectChanges();
        return { fixture, component: fixture.componentInstance };
    }

    describe('contacts data', () => {
        it('declares four contact channels', () => {
            const { component } = setup();
            expect(component.contacts.length).toBe(4);
        });

        it('covers LinkedIn, GitHub, Email and WhatsApp', () => {
            const { component } = setup();
            const titles = component.contacts.map((c) => c.title);
            expect(titles).toEqual(
                expect.arrayContaining(['LinkedIn', 'GitHub', 'Email', 'WhatsApp']),
            );
        });

        it('uses a mailto: URL for the email contact', () => {
            const { component } = setup();
            const email = component.contacts.find((c) => c.title === 'Email');
            expect(email?.link.startsWith('mailto:')).toBe(true);
        });

        it('uses external https URLs for LinkedIn, GitHub and WhatsApp', () => {
            const { component } = setup();
            for (const title of ['LinkedIn', 'GitHub', 'WhatsApp']) {
                const contact = component.contacts.find((c) => c.title === title);
                expect(contact?.link.startsWith('https://')).toBe(true);
            }
        });
    });

    describe('rendering', () => {
        it('renders one card per contact inside a list', () => {
            const { fixture, component } = setup();
            const cards = (fixture.nativeElement as HTMLElement).querySelectorAll('.contact-card');
            expect(cards.length).toBe(component.contacts.length);
        });

        it('opens external links in a new tab with noopener/noreferrer', () => {
            const { fixture } = setup();
            const cards = (
                fixture.nativeElement as HTMLElement
            ).querySelectorAll<HTMLAnchorElement>('.contact-card');
            for (const card of Array.from(cards)) {
                expect(card.getAttribute('target')).toBe('_blank');
                expect(card.getAttribute('rel')).toContain('noopener');
                expect(card.getAttribute('rel')).toContain('noreferrer');
            }
        });

        it('exposes an accessible label that combines title and value', () => {
            const { fixture, component } = setup();
            const first = (fixture.nativeElement as HTMLElement).querySelector<HTMLAnchorElement>(
                '.contact-card',
            );
            const expected = `${component.contacts[0].title}: ${component.contacts[0].value}`;
            expect(first?.getAttribute('aria-label')).toBe(expected);
        });

        it('threads the per-contact brand colour into a CSS custom property', () => {
            const { fixture, component } = setup();
            const card = (fixture.nativeElement as HTMLElement).querySelector<HTMLElement>(
                '.contact-card',
            );
            expect(card?.style.getPropertyValue('--contact-color')).toBe(
                component.contacts[0].color,
            );
        });
    });
});
