import {
    AfterViewInit,
    ChangeDetectionStrategy,
    Component,
    DestroyRef,
    HostListener,
    PLATFORM_ID,
    computed,
    inject,
    signal,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
    selector: 'app-custom-cursor',
    standalone: true,
    template: `
        @if (enabled()) {
            <div class="cursor-dot" [class.hovering]="isHovering()" [style.transform]="dotTransform()"></div>
            <div class="cursor-outline" [class.hovering]="isHovering()" [style.transform]="outlineTransform()"></div>
        }
    `,
    styles: [
        `
            :host {
                pointer-events: none;
                position: fixed;
                inset: 0;
                z-index: 9999;
            }

            .cursor-dot,
            .cursor-outline {
                position: absolute;
                top: 0;
                left: 0;
                border-radius: 50%;
                will-change: transform, background-color, border-color;
            }

            .cursor-dot {
                width: 8px;
                height: 8px;
                background-color: #00f2a1;
                transition: background-color 0.2s, box-shadow 0.2s;
                box-shadow: 0 0 10px rgba(0, 242, 161, 0.8);
            }

            .cursor-dot.hovering {
                background-color: #ffffff;
                box-shadow: 0 0 15px rgba(255, 255, 255, 1);
            }

            .cursor-outline {
                width: 40px;
                height: 40px;
                border: 1px solid #00f2a1;
                transition: border-color 0.2s, background-color 0.2s;
                opacity: 0.6;
            }

            .cursor-outline.hovering {
                border-color: #ffffff;
                background-color: rgba(255, 255, 255, 0.1);
                opacity: 1;
            }
        `,
    ],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomCursorComponent implements AfterViewInit {
    private platformId = inject(PLATFORM_ID);
    private destroyRef = inject(DestroyRef);

    enabled = signal(false);
    mouseX = signal(0);
    mouseY = signal(0);
    isHovering = signal(false);
    isClicked = signal(false);
    outlineTransform = signal('');

    private outlineX = 0;
    private outlineY = 0;
    private rafId = 0;

    dotTransform = computed(() => {
        const scale = this.isClicked() ? 0.8 : 1;
        return `translate3d(${this.mouseX()}px, ${this.mouseY()}px, 0) translate(-50%, -50%) scale(${scale})`;
    });

    ngAfterViewInit() {
        if (!isPlatformBrowser(this.platformId)) return;
        if (window.matchMedia('(hover: none)').matches) return;

        this.enabled.set(true);
        this.animate();
        this.destroyRef.onDestroy(() => cancelAnimationFrame(this.rafId));
    }

    @HostListener('document:mousemove', ['$event'])
    onMouseMove(e: MouseEvent) {
        if (!this.enabled()) return;
        this.mouseX.set(e.clientX);
        this.mouseY.set(e.clientY);

        const target = e.target as HTMLElement | null;
        const hit = target?.closest(
            'a, button, [role="button"], input, select, textarea, .card, .skill-card, .contact-card, .cert-card-wrapper, .tab-btn',
        );
        this.isHovering.set(!!hit);
    }

    @HostListener('document:mousedown')
    onMouseDown() {
        this.isClicked.set(true);
    }

    @HostListener('document:mouseup')
    onMouseUp() {
        this.isClicked.set(false);
    }

    private animate = () => {
        const speed = 0.35;
        this.outlineX += (this.mouseX() - this.outlineX) * speed;
        this.outlineY += (this.mouseY() - this.outlineY) * speed;
        const scale = this.isClicked() ? 0.85 : 1;
        this.outlineTransform.set(
            `translate3d(${this.outlineX}px, ${this.outlineY}px, 0) translate(-50%, -50%) scale(${scale})`,
        );
        this.rafId = requestAnimationFrame(this.animate);
    };
}
