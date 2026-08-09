import {
    ChangeDetectionStrategy,
    Component,
    OnInit,
    PLATFORM_ID,
    computed,
    inject,
    signal,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { DeviceCapabilityService } from '../../utils/functions/device-capability';

interface Ember {
    left: string;
    width: string;
    height: string;
    duration: string;
    delay: string;
    depth: 'near' | 'far';
}

/** Teto de brasas geradas; quantas entram em tela depende da maquina. */
const EMBER_POOL_SIZE = 18;

@Component({
    selector: 'app-embers-background',
    standalone: true,
    template: `
        <div class="embers-container">
            @for (ember of embers(); track $index) {
                <div
                    class="ember"
                    [class.near]="ember.depth === 'near'"
                    [class.far]="ember.depth === 'far'"
                    [style.left]="ember.left"
                    [style.width]="ember.width"
                    [style.height]="ember.height"
                    [style.animation-duration]="ember.duration"
                    [style.animation-delay]="ember.delay"
                ></div>
            }
        </div>
    `,
    styles: [
        `
            .embers-container {
                position: fixed;
                inset: 0;
                overflow: hidden;
                pointer-events: none;
                z-index: -1;
            }

            .ember {
                position: absolute;
                bottom: 0;
                border-radius: 50%;
                opacity: 0;
                animation: rise linear infinite;
                background: radial-gradient(circle, #ffaa00 0%, #ff4500 40%, transparent 80%);
                will-change: transform, opacity;
            }

            .ember.near {
                opacity: 0.8;
                z-index: 2;
            }
            .ember.far {
                opacity: 0.4;
                z-index: 0;
            }

            /*
             * Blend e blur por brasa custam uma camada de composicao cada. Com as
             * brasas em elemento fixo cobrindo a viewport, essas camadas entram na
             * conta de todo frame de scroll. So aparecem onde a maquina aguenta.
             */
            :host-context(body.fx-rich) .ember {
                mix-blend-mode: screen;
            }
            :host-context(body.fx-rich) .ember.far {
                filter: blur(4px);
            }

            @keyframes rise {
                0% {
                    transform: translate3d(0, 10px, 0);
                    opacity: 0;
                }
                20% {
                    opacity: 1;
                }
                50% {
                    transform: translate3d(-20px, -55vh, 0);
                }
                100% {
                    transform: translate3d(20px, -110vh, 0);
                    opacity: 0;
                }
            }
        `,
    ],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmbersBackgroundComponent implements OnInit {
    private platformId = inject(PLATFORM_ID);
    private capability = inject(DeviceCapabilityService);

    private readonly pool = signal<Ember[]>([]);

    /**
     * Derivado da capacidade em vez de fixado na inicializacao: a sondagem de
     * frame rate roda depois do primeiro paint, e quando ela rebaixa a maquina as
     * brasas excedentes saem de tela sozinhas. Cortar pelo fim da lista evita que
     * as que continuam visiveis pulem de posicao.
     */
    readonly embers = computed(() => {
        if (this.capability.prefersReducedMotion()) return [];
        const isLowEnd = this.capability.isLowEnd();
        const count = isLowEnd ? 5 : this.capability.isTouch() ? 10 : EMBER_POOL_SIZE;
        return this.pool().slice(0, count);
    });

    ngOnInit() {
        if (!isPlatformBrowser(this.platformId)) return;

        this.pool.set(
            Array.from({ length: EMBER_POOL_SIZE }).map(() => {
                const size = 2 + Math.random() * 6;
                const isNear = Math.random() > 0.5;
                return {
                    left: `${Math.random() * 100}%`,
                    width: `${isNear ? size : size * 0.5}px`,
                    height: `${isNear ? size : size * 0.5}px`,
                    duration: `${5 + Math.random() * 15}s`,
                    delay: `-${Math.random() * 20}s`,
                    depth: isNear ? 'near' : 'far',
                };
            }),
        );
    }
}
