import { Component, HostListener, signal, computed, Inject, PLATFORM_ID, AfterViewInit } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
    selector: 'app-custom-cursor',
    standalone: true,
    imports: [CommonModule],
    template: `
        <div class="cursor-dot"
             [class.hovering]="isHovering()"
             [style.transform]="dotTransform()">
        </div>

        <div class="cursor-outline"
             [class.hovering]="isHovering()"
             [style.transform]="outlineTransform()">
        </div>
    `,
    styles: [
        `
            :host {
                pointer-events: none;
                position: fixed;
                z-index: 9999;
                top: 0;
                left: 0;
                width: 100vw;
                height: 100vh;
            }

            .cursor-dot {
                width: 8px;
                height: 8px;
                background-color: #00f2a1;
                border-radius: 50%;
                position: absolute;
                top: 0;
                left: 0;
                will-change: transform, background-color;
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
                border-radius: 50%;
                position: absolute;
                top: 0;
                left: 0;
                will-change: transform, border-color, background-color;
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
})
export class CustomCursorComponent implements AfterViewInit {
    mouseX = signal(0);
    mouseY = signal(0);
    isHovering = signal(false);
    isClicked = signal(false);

    outlineX = 0;
    outlineY = 0;

    dotTransform = computed(() => {
        const x = this.mouseX();
        const y = this.mouseY();
        const scale = this.isClicked() ? 0.8 : 1;
        return `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%) scale(${scale})`;
    });

    outlineTransform = signal('');

    constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

    ngAfterViewInit() {
        if (isPlatformBrowser(this.platformId)) {
            this.animate();
        }
    }

    @HostListener('document:mousemove', ['$event'])
    onMouseMove(e: MouseEvent) {
        this.mouseX.set(e.clientX);
        this.mouseY.set(e.clientY);

        const target = e.target as HTMLElement;
        const clickable = target.closest('a, button, .pointer, [role="button"], input, select, textarea, .card, .skill-card, .contact-card');
        this.isHovering.set(!!clickable);
    }

    @HostListener('document:mousedown')
    onMouseDown() {
        this.isClicked.set(true);
    }

    @HostListener('document:mouseup')
    onMouseUp() {
        this.isClicked.set(false);
    }

    animate() {
        if (!isPlatformBrowser(this.platformId)) return;

        const speed = 0.35;

        const distX = this.mouseX() - this.outlineX;
        const distY = this.mouseY() - this.outlineY;

        this.outlineX += distX * speed;
        this.outlineY += distY * speed;

        const scale = this.isClicked() ? 0.85 : 1;

        this.outlineTransform.set(
            `translate3d(${this.outlineX}px, ${this.outlineY}px, 0) translate(-50%, -50%) scale(${scale})`
        );

        requestAnimationFrame(() => this.animate());
    }
}
