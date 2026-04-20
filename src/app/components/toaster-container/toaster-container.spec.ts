import { TestBed } from '@angular/core/testing';
import { describe, expect, it } from 'vitest';
import { ToasterContainer } from './toaster-container';
import { ToasterService } from '../../utils/functions/toaster.service';
import { provideTesting } from '../../../testing/test-helpers';

describe('ToasterContainer', () => {
    function setup() {
        TestBed.configureTestingModule({
            imports: [ToasterContainer],
            providers: provideTesting(),
        });
        const fixture = TestBed.createComponent(ToasterContainer);
        fixture.detectChanges();
        const toaster = TestBed.inject(ToasterService);
        return { fixture, component: fixture.componentInstance, toaster };
    }

    describe('rendering', () => {
        it('renders no toasts when the service is empty', () => {
            const { fixture } = setup();
            expect((fixture.nativeElement as HTMLElement).querySelectorAll('.toast').length).toBe(0);
        });

        it('renders one .toast per active toast and tags it with its type', () => {
            const { fixture, toaster } = setup();
            toaster.success('Saved');
            toaster.error('Boom');
            toaster.info('FYI');
            fixture.detectChanges();

            const nodes = (fixture.nativeElement as HTMLElement).querySelectorAll<HTMLElement>('.toast');
            expect(nodes.length).toBe(3);
            const classes = Array.from(nodes).map((n) => n.className);
            expect(classes.some((c) => c.includes('success'))).toBe(true);
            expect(classes.some((c) => c.includes('error'))).toBe(true);
            expect(classes.some((c) => c.includes('info'))).toBe(true);
        });

        it('shows the toast message text verbatim', () => {
            const { fixture, toaster } = setup();
            toaster.success('Hello world');
            fixture.detectChanges();

            const message = (fixture.nativeElement as HTMLElement).querySelector('.toast .message');
            expect(message?.textContent?.trim()).toBe('Hello world');
        });
    });

    describe('interaction', () => {
        it('removes a toast from the service when it is clicked', () => {
            const { fixture, toaster } = setup();
            toaster.success('Removable');
            fixture.detectChanges();

            const toast = (fixture.nativeElement as HTMLElement).querySelector<HTMLElement>('.toast');
            toast!.click();
            fixture.detectChanges();

            expect(toaster.toasts().length).toBe(0);
            expect((fixture.nativeElement as HTMLElement).querySelectorAll('.toast').length).toBe(0);
        });
    });

    describe('icon rendering', () => {
        it('renders a distinct inline svg icon for each toast type', () => {
            const { fixture, toaster } = setup();
            toaster.success('a');
            toaster.error('b');
            toaster.info('c');
            fixture.detectChanges();

            const toasts = (fixture.nativeElement as HTMLElement).querySelectorAll<HTMLElement>('.toast');
            for (const toast of Array.from(toasts)) {
                expect(toast.querySelector('.icon svg')).toBeTruthy();
            }
        });
    });
});
