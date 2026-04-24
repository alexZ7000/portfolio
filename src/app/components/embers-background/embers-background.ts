import {
    ChangeDetectionStrategy,
    Component,
    OnInit,
    PLATFORM_ID,
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
                mix-blend-mode: screen;
                animation: rise linear infinite;
                background: radial-gradient(circle, #ffaa00 0%, #ff4500 40%, transparent 80%);
                will-change: transform, opacity;
            }

            .ember.near {
                filter: blur(0);
                opacity: 0.8;
                z-index: 2;
            }
            .ember.far {
                filter: blur(4px);
                opacity: 0.4;
                z-index: 0;
            }

            :host-context(body.is-low-end) .ember {
                mix-blend-mode: normal;
            }
            :host-context(body.is-low-end) .ember.far {
                filter: none;
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

    embers = signal<Ember[]>([]);

    ngOnInit() {
        if (!isPlatformBrowser(this.platformId)) return;
        if (this.capability.prefersReducedMotion()) return;

        const isLowEnd = this.capability.isLowEnd();
        const isTouch = this.capability.isTouch();
        const emberCount = isLowEnd ? 6 : isTouch ? 12 : 25;

        const embersArray: Ember[] = Array.from({ length: emberCount }).map(() => {
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
        });
        this.embers.set(embersArray);
    }
}
