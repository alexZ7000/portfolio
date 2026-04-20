import { TestBed } from '@angular/core/testing';
import { PLATFORM_ID } from '@angular/core';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { ScrollService } from './scroll.service';

describe('ScrollService', () => {
    let scrollToSpy: ReturnType<typeof vi.spyOn>;
    let originalScrollY: number;

    beforeEach(() => {
        scrollToSpy = vi.spyOn(window, 'scrollTo').mockImplementation(() => {});
        originalScrollY = window.scrollY;
        Object.defineProperty(window, 'scrollY', { configurable: true, get: () => 200 });
    });

    afterEach(() => {
        scrollToSpy.mockRestore();
        Object.defineProperty(window, 'scrollY', { configurable: true, value: originalScrollY });
        document.body.innerHTML = '';
    });

    describe('on a browser platform', () => {
        function makeService() {
            TestBed.configureTestingModule({
                providers: [ScrollService, { provide: PLATFORM_ID, useValue: 'browser' }],
            });
            return TestBed.inject(ScrollService);
        }

        it('scrolls to the targeted section minus the navbar offset', () => {
            const target = document.createElement('section');
            target.id = 'about-me';
            document.body.appendChild(target);
            vi.spyOn(target, 'getBoundingClientRect').mockReturnValue({
                top: 500,
            } as DOMRect);

            makeService().scrollTo('about-me');

            expect(scrollToSpy).toHaveBeenCalledWith({
                top: 500 + 200 - 80,
                behavior: 'smooth',
            });
        });

        it('does nothing when the target element does not exist', () => {
            makeService().scrollTo('nonexistent');
            expect(scrollToSpy).not.toHaveBeenCalled();
        });

        it('scrolls to the very top with smooth behavior', () => {
            makeService().scrollToTop();
            expect(scrollToSpy).toHaveBeenCalledWith({ top: 0, behavior: 'smooth' });
        });
    });

    describe('on a server platform', () => {
        function makeService() {
            TestBed.configureTestingModule({
                providers: [ScrollService, { provide: PLATFORM_ID, useValue: 'server' }],
            });
            return TestBed.inject(ScrollService);
        }

        it('does not touch window.scrollTo for scrollTo', () => {
            makeService().scrollTo('about-me');
            expect(scrollToSpy).not.toHaveBeenCalled();
        });

        it('does not touch window.scrollTo for scrollToTop', () => {
            makeService().scrollToTop();
            expect(scrollToSpy).not.toHaveBeenCalled();
        });
    });
});
