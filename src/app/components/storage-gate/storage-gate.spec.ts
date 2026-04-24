import { TestBed } from '@angular/core/testing';
import { PLATFORM_ID } from '@angular/core';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { StorageGateComponent } from './storage-gate';
import { StorageAvailabilityService } from './storage-availability.service';
import { provideTesting } from '../../../testing/test-helpers';

describe('StorageGateComponent', () => {
    let originalLocalStorage: PropertyDescriptor | undefined;
    let originalCookieEnabled: PropertyDescriptor | undefined;

    beforeEach(() => {
        originalLocalStorage = Object.getOwnPropertyDescriptor(window, 'localStorage');
        originalCookieEnabled = Object.getOwnPropertyDescriptor(
            Navigator.prototype,
            'cookieEnabled',
        );
    });

    afterEach(() => {
        if (originalLocalStorage) {
            Object.defineProperty(window, 'localStorage', originalLocalStorage);
        }
        if (originalCookieEnabled) {
            Object.defineProperty(Navigator.prototype, 'cookieEnabled', originalCookieEnabled);
        }
    });

    function setup(platform: 'browser' | 'server' = 'browser') {
        TestBed.configureTestingModule({
            imports: [StorageGateComponent],
            providers: [...provideTesting(), { provide: PLATFORM_ID, useValue: platform }],
        });
        const fixture = TestBed.createComponent(StorageGateComponent);
        fixture.detectChanges();
        return { fixture, component: fixture.componentInstance };
    }

    it('does not block access when localStorage and cookies both work', () => {
        Object.defineProperty(Navigator.prototype, 'cookieEnabled', {
            configurable: true,
            get: () => true,
        });
        const { fixture, component } = setup('browser');
        expect(component.blocked()).toBe(false);
        expect((fixture.nativeElement as HTMLElement).querySelector('.storage-gate')).toBeNull();
    });

    it('blocks access when localStorage.setItem throws (private browsing / storage blocked)', () => {
        Object.defineProperty(window, 'localStorage', {
            configurable: true,
            get: () => ({
                setItem: () => {
                    throw new Error('QuotaExceededError');
                },
                removeItem: () => {},
                getItem: () => null,
            }),
        });

        const { fixture, component } = setup('browser');
        expect(component.blocked()).toBe(true);
        expect((fixture.nativeElement as HTMLElement).querySelector('.storage-gate')).toBeTruthy();
    });

    it('blocks access when navigator.cookieEnabled is false', () => {
        Object.defineProperty(Navigator.prototype, 'cookieEnabled', {
            configurable: true,
            get: () => false,
        });
        const { component } = setup('browser');
        expect(component.blocked()).toBe(true);
    });

    it('blocks access when navigator.cookieEnabled getter throws (fingerprinting protection)', () => {
        Object.defineProperty(Navigator.prototype, 'cookieEnabled', {
            configurable: true,
            get: () => {
                throw new Error('blocked by privacy policy');
            },
        });
        const { component } = setup('browser');
        expect(component.blocked()).toBe(true);
    });

    it('is always transparent on the server', () => {
        const { component } = setup('server');
        expect(component.blocked()).toBe(false);
    });

    it('retry does nothing while storage is still blocked', () => {
        Object.defineProperty(window, 'localStorage', {
            configurable: true,
            get: () => ({
                setItem: () => {
                    throw new Error('blocked');
                },
                removeItem: () => {},
                getItem: () => null,
            }),
        });
        const reloadSpy = vi.fn();
        Object.defineProperty(window, 'location', {
            configurable: true,
            value: { ...window.location, reload: reloadSpy },
        });

        const { component } = setup('browser');
        component.retry();
        expect(component.blocked()).toBe(true);
        expect(reloadSpy).not.toHaveBeenCalled();
    });

    it('exposes a translated gate copy based on navigator.language', () => {
        const originalLang = Object.getOwnPropertyDescriptor(Navigator.prototype, 'language');
        Object.defineProperty(Navigator.prototype, 'language', {
            configurable: true,
            get: () => 'pt-BR',
        });

        const { component } = setup('browser');
        expect(component.copy().title).toMatch(/Cookies/i);
        expect(component.copy().retry).toMatch(/tentar/i);

        if (originalLang) Object.defineProperty(Navigator.prototype, 'language', originalLang);
    });

    describe('StorageAvailabilityService', () => {
        it('shares the availability signal across consumers', () => {
            Object.defineProperty(Navigator.prototype, 'cookieEnabled', {
                configurable: true,
                get: () => true,
            });
            TestBed.configureTestingModule({
                providers: [...provideTesting(), { provide: PLATFORM_ID, useValue: 'browser' }],
            });
            const service = TestBed.inject(StorageAvailabilityService);
            expect(service.available()).toBe(true);
        });
    });
});
