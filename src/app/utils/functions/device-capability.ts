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

        this.safeInitReducedMotion();
        this.safeInitTouch();
        this.safeInitLowEnd();

        try {
            if (this._isLowEnd()) document.body.classList.add('is-low-end');
            if (this._prefersReducedMotion()) document.body.classList.add('reduced-motion');
        } catch {
            // document inacessível — segue sem classes auxiliares
        }
    }

    private safeInitReducedMotion() {
        try {
            if (typeof window.matchMedia !== 'function') return;
            const q = window.matchMedia('(prefers-reduced-motion: reduce)');
            this._prefersReducedMotion.set(!!q.matches);
            const onChange = (e: MediaQueryListEvent) => this._prefersReducedMotion.set(e.matches);
            q.addEventListener?.('change', onChange);
        } catch {
            // matchMedia bloqueado — assume motion habilitado
        }
    }

    private safeInitTouch() {
        try {
            if (typeof window.matchMedia !== 'function') return;
            this._isTouch.set(!!window.matchMedia('(hover: none)').matches);
        } catch {
            // ignore
        }
    }

    private safeInitLowEnd() {
        try {
            this._isLowEnd.set(this.detectLowEnd());
        } catch {
            this._isLowEnd.set(false);
        }
    }

    /**
     * Apenas sinais EXPLÍCITOS do usuário/rede contam como low-end. Não usamos
     * `navigator.deviceMemory` nem `hardwareConcurrency` — proteções anti-fingerprint
     * (Firefox RFP, Tor) devolvem valores falsos (`hardwareConcurrency=2`,
     * `deviceMemory=undefined`), e tratar isso como hardware fraco penalizaria
     * usuários que só querem privacidade. Quem tem hardware fraco de verdade pode
     * sinalizar via Data Saver ou `prefers-reduced-motion` do sistema.
     */
    private detectLowEnd(): boolean {
        const connection = this.readNav<{ saveData?: boolean; effectiveType?: string }>(
            'connection',
        );

        if (connection?.saveData === true) return true;
        const slow = connection?.effectiveType;
        if (slow === 'slow-2g' || slow === '2g' || slow === '3g') return true;

        return false;
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
