import { Injectable, PLATFORM_ID, computed, effect, inject, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

const SESSION_VERDICT_KEY = 'portfolio:fx-verdict:v3';
const LEGACY_LOCAL_KEYS = ['portfolio:low-end', 'portfolio:fx-verdict:v2'];

const PROBE_START_DELAY_MS = 8000;
const PROBE_WINDOW_MS = 2500;
const MIN_ACCEPTABLE_FPS = 24;

@Injectable({ providedIn: 'root' })
export class DeviceCapabilityService {
    private platformId = inject(PLATFORM_ID);

    private readonly _prefersReducedMotion = signal(false);
    private readonly _isLowEnd = signal(false);
    private readonly _isTouch = signal(false);
    private readonly _supportsBackdropFilter = signal(true);
    private readonly _supportsBlendModes = signal(true);

    readonly prefersReducedMotion = this._prefersReducedMotion.asReadonly();
    readonly isLowEnd = this._isLowEnd.asReadonly();
    readonly isTouch = this._isTouch.asReadonly();
    readonly supportsBackdropFilter = this._supportsBackdropFilter.asReadonly();
    readonly supportsBlendModes = this._supportsBlendModes.asReadonly();

    readonly shouldReduceEffects = computed(() => this._prefersReducedMotion() || this._isLowEnd());

    readonly allowsPointerEffects = computed(
        () => !this._prefersReducedMotion() && !this._isTouch(),
    );

    constructor() {
        if (!isPlatformBrowser(this.platformId)) return;

        this.cleanupLegacyVerdicts();
        this.safeInitTouch();
        this.safeInitFeatureSupport();
        this.safeInitLowEnd();

        effect(() => this.syncBodyClasses());

        if (!this._isLowEnd()) {
            this.scheduleFrameRateProbe();
        }
    }

    private safeInitTouch() {
        try {
            if (typeof window.matchMedia !== 'function') return;
            this._isTouch.set(!!window.matchMedia('(hover: none)').matches);
        } catch {
            void 0;
        }
    }

    private safeInitFeatureSupport() {
        this._supportsBackdropFilter.set(
            this.cssSupports('backdrop-filter', 'blur(4px)') ||
                this.cssSupports('-webkit-backdrop-filter', 'blur(4px)'),
        );
        this._supportsBlendModes.set(this.cssSupports('mix-blend-mode', 'screen'));
    }

    private cssSupports(property: string, value: string): boolean {
        try {
            if (typeof CSS === 'undefined' || typeof CSS.supports !== 'function') return false;
            return CSS.supports(property, value);
        } catch {
            return false;
        }
    }

    private safeInitLowEnd() {
        try {
            this._isLowEnd.set(this.detectLowEnd());
        } catch {
            this._isLowEnd.set(false);
        }
    }

    private detectLowEnd(): boolean {
        if (this.readSessionVerdict()) return true;

        const connection = this.readNav<{ saveData?: boolean; effectiveType?: string }>(
            'connection',
        );

        if (connection?.saveData === true) return true;
        const slow = connection?.effectiveType;
        if (slow === 'slow-2g' || slow === '2g' || slow === '3g') return true;

        if (!this._supportsBackdropFilter() && !this._supportsBlendModes()) return true;

        return false;
    }

    private scheduleFrameRateProbe() {
        if (typeof requestAnimationFrame !== 'function') return;

        window.setTimeout(() => {
            if (this.pageHidden()) return;

            let frames = 0;
            const startedAt = performance.now();

            const tick = () => {
                if (this.pageHidden()) return;

                const now = performance.now();
                frames++;

                const elapsed = now - startedAt;
                if (elapsed >= PROBE_WINDOW_MS) {
                    const fps = (frames / elapsed) * 1000;
                    if (fps < MIN_ACCEPTABLE_FPS) this.markLowEnd();
                    return;
                }
                requestAnimationFrame(tick);
            };

            requestAnimationFrame(tick);
        }, PROBE_START_DELAY_MS);
    }

    markLowEnd() {
        if (this._isLowEnd()) return;
        this._isLowEnd.set(true);
        this.writeSessionVerdict();
    }

    private pageHidden(): boolean {
        try {
            return document.visibilityState === 'hidden';
        } catch {
            return false;
        }
    }

    private syncBodyClasses() {
        const lowEnd = this._isLowEnd();
        const reduced = this._prefersReducedMotion();
        const backdrop = this._supportsBackdropFilter();
        const blend = this._supportsBlendModes();

        try {
            const { classList } = document.body;
            classList.toggle('is-low-end', lowEnd);
            classList.toggle('reduced-motion', reduced);
            classList.toggle('no-backdrop-filter', !backdrop);
            classList.toggle('no-blend-modes', !blend);
            classList.toggle('fx-rich', !lowEnd && !reduced && backdrop && blend);

            const root = document.documentElement.classList;
            root.toggle('is-low-end', lowEnd);
            root.toggle('reduced-motion', reduced);
        } catch {
            void 0;
        }
    }

    private cleanupLegacyVerdicts() {
        try {
            const storage = window.localStorage;
            if (!storage) return;
            for (const key of LEGACY_LOCAL_KEYS) storage.removeItem(key);
        } catch {
            void 0;
        }
    }

    private readSessionVerdict(): boolean {
        try {
            return window.sessionStorage?.getItem(SESSION_VERDICT_KEY) === '1';
        } catch {
            return false;
        }
    }

    private writeSessionVerdict() {
        try {
            window.sessionStorage?.setItem(SESSION_VERDICT_KEY, '1');
        } catch {
            void 0;
        }
    }

    private readNav<T>(key: string): T | undefined {
        try {
            if (typeof navigator === 'undefined') return undefined;
            const value = (navigator as unknown as Record<string, unknown>)[key];
            return value as T | undefined;
        } catch {
            return undefined;
        }
    }
}
