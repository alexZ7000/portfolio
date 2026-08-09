import { Injectable, PLATFORM_ID, computed, effect, inject, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

/** Veredito lembrado entre visitas: a segunda carga ja comeca degradada. */
const LOW_END_KEY = 'portfolio:low-end';

/**
 * A sondagem so comeca depois deste atraso. Os primeiros frames depois do
 * bootstrap sao lentos em qualquer maquina (hidratacao, parse de bundle, fontes)
 * e medir ali marcaria desktops saudaveis como fracos.
 */
const PROBE_START_DELAY_MS = 1200;

/** Janela de medicao. Curta pra terminar antes do primeiro scroll do usuario. */
const PROBE_WINDOW_MS = 1500;

/** Abaixo disso o compositor nao esta acompanhando e os efeitos saem. */
const MIN_ACCEPTABLE_FPS = 38;

/** Um frame acima disso ja e percebido como engasgo. */
const STALL_FRAME_MS = 120;
const MAX_STALLED_FRAMES = 3;

/**
 * Boot acima disso indica CPU e/ou rede ruins o bastante pra nao valer a pena
 * esperar a sondagem: corta os efeitos na hora.
 */
const SLOW_BOOT_MS = 4000;

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

    /**
     * Efeitos presos ao ponteiro (tilt 3D dos cartoes, cursor custom, parallax do
     * dragao) rodam a cada mousemove. Sao os primeiros a sair quando a maquina nao
     * aguenta, e nunca fazem sentido em touch.
     */
    readonly allowsPointerEffects = computed(() => !this.shouldReduceEffects() && !this._isTouch());

    constructor() {
        if (!isPlatformBrowser(this.platformId)) return;

        this.safeInitReducedMotion();
        this.safeInitTouch();
        this.safeInitFeatureSupport();
        this.safeInitLowEnd();

        effect(() => this.syncBodyClasses());

        if (!this._isLowEnd() && !this._prefersReducedMotion()) {
            this.scheduleFrameRateProbe();
        }
    }

    private safeInitReducedMotion() {
        try {
            if (typeof window.matchMedia !== 'function') return;
            const q = window.matchMedia('(prefers-reduced-motion: reduce)');
            this._prefersReducedMotion.set(!!q.matches);
            const onChange = (e: MediaQueryListEvent) => this._prefersReducedMotion.set(e.matches);
            // Safari < 14 e Chrome < 39 so tem addListener; sem isso a preferencia
            // fica congelada no valor do boot, o que ainda e correto.
            if (typeof q.addEventListener === 'function') q.addEventListener('change', onChange);
            else if (typeof q.addListener === 'function') q.addListener(onChange);
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

    /**
     * O visual depende de `backdrop-filter` e de blend modes. Onde eles nao
     * existem o navegador nao "degrada": ele ignora a declaracao e deixa paineis
     * transparentes sobre texto. Detectar aqui permite servir um fundo solido.
     */
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

    /**
     * Nao usamos `navigator.deviceMemory` nem `hardwareConcurrency`: protecoes
     * anti-fingerprint (Firefox RFP, Tor) devolvem valores falsos e penalizariam
     * quem so quer privacidade. O que conta e comportamento observado — Data
     * Saver, rede lenta, boot arrastado, engine sem os recursos que o layout usa
     * e, principalmente, o frame rate medido em `scheduleFrameRateProbe`.
     */
    private detectLowEnd(): boolean {
        if (this.readStoredVerdict()) return true;

        const connection = this.readNav<{ saveData?: boolean; effectiveType?: string }>(
            'connection',
        );

        if (connection?.saveData === true) return true;
        const slow = connection?.effectiveType;
        if (slow === 'slow-2g' || slow === '2g' || slow === '3g') return true;

        // Engine sem backdrop-filter nem blend modes e velha o bastante pra
        // sofrer com o resto dos efeitos tambem.
        if (!this._supportsBackdropFilter() && !this._supportsBlendModes()) return true;

        if (this.bootElapsedMs() > SLOW_BOOT_MS) return true;

        return false;
    }

    private bootElapsedMs(): number {
        try {
            if (typeof performance === 'undefined' || typeof performance.now !== 'function') {
                return 0;
            }
            return performance.now();
        } catch {
            return 0;
        }
    }

    /**
     * Mede quantos frames o navegador consegue entregar em repouso. E o unico
     * sinal que enxerga o caso real que quebrava o site: desktop moderno o
     * suficiente pra suportar todos os recursos, mas com GPU integrada velha ou
     * composicao por software, onde blend modes e backdrop-filter custam dezenas
     * de milissegundos por frame.
     */
    private scheduleFrameRateProbe() {
        if (typeof requestAnimationFrame !== 'function') return;

        window.setTimeout(() => {
            let frames = 0;
            let stalls = 0;
            let last = performance.now();
            const startedAt = last;

            const tick = () => {
                const now = performance.now();
                const delta = now - last;
                last = now;

                if (delta > STALL_FRAME_MS) stalls++;
                frames++;

                const elapsed = now - startedAt;
                if (stalls >= MAX_STALLED_FRAMES) {
                    this.markLowEnd();
                    return;
                }
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

    /**
     * Rebaixa a sessao atual e lembra o veredito. Componentes que leem o signal
     * (embers, cursor, tilt dos cartoes) reagem na hora; os que ja se
     * inicializaram param nos guards que checam a capacidade no momento do evento.
     */
    markLowEnd() {
        if (this._isLowEnd()) return;
        this._isLowEnd.set(true);
        this.writeStoredVerdict();
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
            // Enfeites caros (ruido global, glows sobrepostos) so entram aqui.
            classList.toggle('fx-rich', !lowEnd && !reduced && backdrop && blend);

            // `scroll-behavior` so vale no elemento que rola, que e o <html>.
            const root = document.documentElement.classList;
            root.toggle('is-low-end', lowEnd);
            root.toggle('reduced-motion', reduced);
        } catch {
            // document inacessivel — segue sem classes auxiliares
        }
    }

    private readStoredVerdict(): boolean {
        try {
            return window.localStorage?.getItem(LOW_END_KEY) === '1';
        } catch {
            return false;
        }
    }

    private writeStoredVerdict() {
        try {
            window.localStorage?.setItem(LOW_END_KEY, '1');
        } catch {
            // storage bloqueado — o veredito vale so pra esta sessao
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
