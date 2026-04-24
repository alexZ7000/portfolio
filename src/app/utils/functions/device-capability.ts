import { Injectable, PLATFORM_ID, computed, inject, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({ providedIn: 'root' })
export class DeviceCapabilityService {
    private platformId = inject(PLATFORM_ID);

    private readonly _prefersReducedMotion = signal(false);
    private readonly _isLowEnd = signal(false);
    private readonly _isTouch = signal(false);

    readonly prefersReducedMotion = this._prefersReducedMotion.asReadonly();
    readonly isLowEnd = this._isLowEnd.asReadonly();
    readonly isTouch = this._isTouch.asReadonly();
    readonly shouldReduceEffects = computed(() => this._prefersReducedMotion() || this._isLowEnd());

    constructor() {
        if (!isPlatformBrowser(this.platformId)) return;

        const reduceMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
        this._prefersReducedMotion.set(reduceMotionQuery.matches);
        const onReduceChange = (e: MediaQueryListEvent) =>
            this._prefersReducedMotion.set(e.matches);
        reduceMotionQuery.addEventListener?.('change', onReduceChange);

        this._isTouch.set(window.matchMedia('(hover: none)').matches);

        this._isLowEnd.set(this.detectLowEnd());

        if (this._isLowEnd()) document.body.classList.add('is-low-end');
        if (this._prefersReducedMotion()) document.body.classList.add('reduced-motion');
    }

    private detectLowEnd(): boolean {
        const nav = navigator as Navigator & {
            deviceMemory?: number;
            connection?: { saveData?: boolean; effectiveType?: string };
        };

        if (nav.connection?.saveData) return true;
        const slow = nav.connection?.effectiveType;
        if (slow === 'slow-2g' || slow === '2g' || slow === '3g') return true;

        if (typeof nav.deviceMemory === 'number' && nav.deviceMemory <= 4) return true;
        if (typeof nav.hardwareConcurrency === 'number' && nav.hardwareConcurrency <= 4)
            return true;

        return false;
    }
}
