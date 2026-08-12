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
        it('declares five contact channels', () => {
            const { component } = setup();
            expect(component.contacts.length).toBe(5);
        });

        it('leads with the primary email address', () => {
            const { component } = setup();
            const first = component.contacts[0];
            expect(first.titleKey).toBe('contactEmailPrimary');
            expect(first.value).toBe('contato@alexZ7000.com.br');
            expect(first.link).toBe('mailto:contato@alexZ7000.com.br');
        });

        it('keeps the secondary email address as a channel', () => {
            const { component } = setup();
            const alt = component.contacts.find((c) => c.titleKey === 'contactEmailAlt');
            expect(alt?.value).toBe('aledeveloper@pm.me');
            expect(alt?.link).toBe('mailto:aledeveloper@pm.me');
        });

        it('covers LinkedIn, GitHub and WhatsApp', () => {
            const { component } = setup();
            const titles = component.contacts.map((c) => c.title);
            expect(titles).toEqual(expect.arrayContaining(['LinkedIn', 'GitHub', 'WhatsApp']));
        });

        it('uses external https URLs for LinkedIn, GitHub and WhatsApp', () => {
            const { component } = setup();
            for (const title of ['LinkedIn', 'GitHub', 'WhatsApp']) {
                const contact = component.contacts.find((c) => c.title === title);
                expect(contact?.link.startsWith('https://')).toBe(true);
            }
        });

        it('gives every channel an rgb triplet so no style depends on color-mix()', () => {
            const { component } = setup();
            for (const contact of component.contacts) {
                expect(contact.rgb).toMatch(/^\d{1,3}, \d{1,3}, \d{1,3}$/);
            }
        });
    });

    describe('phone number privacy', () => {
        it('reaches WhatsApp through a translated label instead of the number', () => {
            const { component } = setup();
            const whatsapp = component.contacts.find((c) => c.title === 'WhatsApp');
            expect(whatsapp?.valueKey).toBe('contactWhatsappAction');
            expect(whatsapp?.value).toBeUndefined();
        });

        it('never renders the phone number anywhere in the section', () => {
            const { fixture } = setup();
            const markup = (fixture.nativeElement as HTMLElement).innerHTML;
            expect(markup).not.toContain('95550-1739');
            const outsideHref = markup.replace(/href="[^"]*"/g, '');
            expect(outsideHref).not.toContain('955501739');
        });

        it('still links straight to the WhatsApp conversation', () => {
            const { fixture } = setup();
            const links = Array.from(
                (fixture.nativeElement as HTMLElement).querySelectorAll<HTMLAnchorElement>(
                    '.contact-card',
                ),
            );
            expect(
                links.some((a) => a.getAttribute('href') === 'https://wa.me/5511955501739'),
            ).toBe(true);
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

        it('derives the accessible name from the card content', () => {
            const { fixture } = setup();
            const first = (fixture.nativeElement as HTMLElement).querySelector<HTMLAnchorElement>(
                '.contact-card',
            );
            expect(first?.hasAttribute('aria-label')).toBe(false);
            expect(first?.textContent).toContain('contato@alexZ7000.com.br');
        });

        it('threads the per-contact brand colour into CSS custom properties', () => {
            const { fixture, component } = setup();
            const card = (fixture.nativeElement as HTMLElement).querySelector<HTMLElement>(
                '.contact-card',
            );
            expect(card?.style.getPropertyValue('--contact-color')).toBe(
                component.contacts[0].color,
            );
            expect(card?.style.getPropertyValue('--contact-rgb')).toBe(component.contacts[0].rgb);
        });
    });
});
