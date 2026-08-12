import { Injectable, PLATFORM_ID, inject, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({ providedIn: 'root' })
export class StorageAvailabilityService {
    private platformId = inject(PLATFORM_ID);

    private readonly _available = signal(true);
    readonly available = this._available.asReadonly();

    constructor() {
        if (!isPlatformBrowser(this.platformId)) return;
        this._available.set(StorageAvailabilityService.probe());
    }

    recheck(): boolean {
        if (!isPlatformBrowser(this.platformId)) return true;
        const next = StorageAvailabilityService.probe();
        this._available.set(next);
        return next;
    }

    static probe(): boolean {
        try {
            if (typeof window === 'undefined') return true;
            if (!('localStorage' in window)) return false;
            const key = '__storage_gate_probe__';
            window.localStorage.setItem(key, '1');
            window.localStorage.removeItem(key);
            try {
                if (navigator.cookieEnabled === false) return false;
            } catch {
                return false;
            }
            return true;
        } catch {
            return false;
        }
    }
}
