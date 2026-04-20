import {
    ChangeDetectionStrategy,
    Component,
    OnInit,
    PLATFORM_ID,
    inject,
    signal,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

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
                bottom: -20px;
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

            @keyframes rise {
                0% {
                    bottom: -10px;
                    transform: translateX(0);
                    opacity: 0;
                }
                20% {
                    opacity: 1;
                }
                50% {
                    transform: translateX(-20px);
                }
                100% {
                    bottom: 110vh;
                    transform: translateX(20px);
                    opacity: 0;
                }
            }
        `,
    ],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmbersBackgroundComponent implements OnInit {
    private platformId = inject(PLATFORM_ID);

    embers = signal<Ember[]>([]);

    ngOnInit() {
        if (!isPlatformBrowser(this.platformId)) return;

        const emberCount = 25;
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
