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
import { DeviceCapabilityService } from '../../utils/functions/device-capability';

type CursorMode = 'default' | 'pointer' | 'text';

const CLICKABLE_SELECTOR = [
    'a[href]',
    'button',
    '[role="button"]',
    '[role="tab"]',
    '[role="link"]',
    'input[type="button"]',
    'input[type="submit"]',
    'input[type="reset"]',
    'input[type="checkbox"]',
    'input[type="radio"]',
    'input[type="file"]',
    'select',
    'summary',
    'label[for]',
    '.skill-card',
    '.cert-card-wrapper',
    '.tab-btn',
    '.project-card__link',
].join(',');

const TEXT_INPUT_SELECTOR = [
    'input:not([type])',
    'input[type="text"]',
    'input[type="email"]',
    'input[type="search"]',
    'input[type="password"]',
    'input[type="url"]',
    'input[type="tel"]',
    'input[type="number"]',
    'textarea',
    '[contenteditable="true"]',
].join(',');

const TEXT_CONTAINER_SELECTOR =
    'p, h1, h2, h3, h4, h5, h6, li, blockquote, article, figcaption, label, th, td, dd, dt';

const TEXT_TAGS = new Set([
    'P',
    'H1',
    'H2',
    'H3',
    'H4',
    'H5',
    'H6',
    'SPAN',
    'EM',
    'STRONG',
    'BLOCKQUOTE',
    'LI',
    'TD',
    'TH',
    'CODE',
    'PRE',
    'ABBR',
    'Q',
    'SMALL',
    'TIME',
    'CITE',
    'DD',
    'DT',
    'LABEL',
]);

@Component({
    selector: 'app-custom-cursor',
    standalone: true,
    template: `
        @if (enabled()) {
            <div
                class="cursor-dot"
                [attr.data-mode]="cursorMode()"
                [style.transform]="dotTransform()"
            >
                <div class="cursor-dot__scale" [class.is-clicked]="isClicked()">
                    <span class="cursor-dot__shape cursor-dot__shape--dot"></span>
                    <span class="cursor-dot__shape cursor-dot__shape--triangle"></span>
                    <span class="cursor-dot__shape cursor-dot__shape--bar"></span>
                </div>
            </div>
            <div
                class="cursor-outline"
                [class.hovering]="isHovering()"
                [class.text-mode]="cursorMode() === 'text'"
                [class.is-clicked]="isClicked()"
                [style.transform]="outlineTransform()"
            ></div>
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
                will-change: transform;
            }

            .cursor-dot {
                width: 0;
                height: 0;
                pointer-events: none;
            }

            .cursor-dot__scale {
                position: absolute;
                top: 0;
                left: 0;
                transform: scale(1);
                transform-origin: center center;
                transition: transform 180ms cubic-bezier(0.4, 0, 0.2, 1);
                will-change: transform;
            }

            .cursor-dot__scale.is-clicked {
                transform: scale(0.7);
            }

            .cursor-dot__shape {
                position: absolute;
                top: 0;
                left: 0;
                opacity: 0;
                transform: translate(-50%, -50%) scale(0.4);
                transition:
                    opacity 220ms cubic-bezier(0.65, 0, 0.35, 1),
                    transform 320ms cubic-bezier(0.34, 1.56, 0.64, 1),
                    background-color 220ms ease,
                    box-shadow 220ms ease;
                pointer-events: none;
                will-change: transform, opacity;
            }

            .cursor-dot__shape--dot {
                width: 8px;
                height: 8px;
                border-radius: 50%;
                background-color: #00f2a1;
                box-shadow: 0 0 10px rgba(0, 242, 161, 0.8);
            }

            .cursor-dot__shape--triangle {
                width: 14px;
                height: 12px;
                background-color: #ffffff;
                clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
                filter: drop-shadow(0 0 8px rgba(255, 255, 255, 0.9));
            }

            .cursor-dot__shape--bar {
                width: 2px;
                height: 18px;
                border-radius: 1px;
                background-color: #00f2a1;
                box-shadow: 0 0 8px rgba(0, 242, 161, 0.85);
            }

            .cursor-dot[data-mode='default'] .cursor-dot__shape--dot,
            .cursor-dot[data-mode='pointer'] .cursor-dot__shape--triangle,
            .cursor-dot[data-mode='text'] .cursor-dot__shape--bar {
                opacity: 1;
                transform: translate(-50%, -50%) scale(1);
            }

            .cursor-outline {
                width: 40px;
                height: 40px;
                border-radius: 50%;
                border: 1px solid #00f2a1;
                opacity: 0.6;
                transition:
                    border-color 0.2s,
                    background-color 0.2s,
                    opacity 0.2s,
                    width 0.25s cubic-bezier(0.34, 1.56, 0.64, 1),
                    height 0.25s cubic-bezier(0.34, 1.56, 0.64, 1),
                    border-radius 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
            }

            .cursor-outline.hovering {
                border-color: #ffffff;
                background-color: rgba(255, 255, 255, 0.1);
                opacity: 1;
            }

            .cursor-outline.text-mode {
                width: 18px;
                height: 26px;
                border-radius: 4px;
            }

            .cursor-outline.is-clicked {
                opacity: 0.9;
            }
        `,
    ],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomCursorComponent implements AfterViewInit {
    private platformId = inject(PLATFORM_ID);
    private destroyRef = inject(DestroyRef);
    private capability = inject(DeviceCapabilityService);

    enabled = signal(false);
    mouseX = signal(0);
    mouseY = signal(0);
    isClicked = signal(false);
    isSelectingText = signal(false);
    hoveringClickable = signal(false);
    outlineTransform = signal('');

    readonly cursorMode = computed<CursorMode>(() => {
        if (this.isSelectingText()) return 'text';
        if (this.hoveringClickable()) return 'pointer';
        return 'default';
    });

    readonly isHovering = computed(() => this.cursorMode() === 'pointer');

    readonly dotTransform = computed(
        () => `translate3d(${this.mouseX()}px, ${this.mouseY()}px, 0)`,
    );

    private outlineX = 0;
    private outlineY = 0;
    private rafId = 0;
    private pendingX = 0;
    private pendingY = 0;
    private pendingTarget: HTMLElement | null = null;
    private lastResolvedTarget: HTMLElement | null = null;

    ngAfterViewInit() {
        if (!isPlatformBrowser(this.platformId)) return;
        if (!this.capability.allowsPointerEffects()) return;

        this.enabled.set(true);
        document.body.classList.add('custom-cursor-active');
        this.destroyRef.onDestroy(() => {
            cancelAnimationFrame(this.rafId);
            this.rafId = 0;
            document.body.classList.remove('custom-cursor-active');
        });
    }

    @HostListener('document:mousemove', ['$event'])
    onMouseMove(e: MouseEvent) {
        if (!this.enabled()) return;
        this.pendingX = e.clientX;
        this.pendingY = e.clientY;
        this.pendingTarget = e.target as HTMLElement | null;
        this.ensureFrame();
    }

    private ensureFrame() {
        if (this.rafId) return;
        this.rafId = requestAnimationFrame(this.animate);
    }

    @HostListener('document:mousedown', ['$event'])
    onMouseDown(e?: MouseEvent) {
        if (!this.enabled()) return;
        this.isClicked.set(true);
        const target = e?.target as HTMLElement | null | undefined;
        this.isSelectingText.set(this.isTextTarget(target ?? null));
        this.ensureFrame();
    }

    @HostListener('document:mouseup')
    onMouseUp() {
        if (!this.enabled()) return;
        this.isClicked.set(false);
        this.isSelectingText.set(false);
        this.ensureFrame();
    }

    private isTextTarget(target: HTMLElement | null): boolean {
        if (!target) return false;
        if (target.closest(TEXT_INPUT_SELECTOR)) return true;
        if (target.closest(CLICKABLE_SELECTOR)) return false;
        if (TEXT_TAGS.has(target.tagName)) return true;
        return !!target.closest(TEXT_CONTAINER_SELECTOR);
    }

    private animate = () => {
        this.rafId = 0;

        this.mouseX.set(this.pendingX);
        this.mouseY.set(this.pendingY);

        const target = this.pendingTarget;
        if (target !== this.lastResolvedTarget) {
            this.lastResolvedTarget = target;
            this.hoveringClickable.set(!!target?.closest(CLICKABLE_SELECTOR));
        }

        const speed = 0.35;
        const dx = this.pendingX - this.outlineX;
        const dy = this.pendingY - this.outlineY;
        this.outlineX += dx * speed;
        this.outlineY += dy * speed;
        const scale = this.isClicked() ? 0.85 : 1;
        this.outlineTransform.set(
            `translate3d(${this.outlineX}px, ${this.outlineY}px, 0) translate(-50%, -50%) scale(${scale})`,
        );

        const settled = Math.abs(dx) < 0.5 && Math.abs(dy) < 0.5;
        if (!settled) this.ensureFrame();
    };
}
