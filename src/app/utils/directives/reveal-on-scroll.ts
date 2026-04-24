import {
    AfterViewInit,
    DestroyRef,
    Directive,
    ElementRef,
    Input,
    OnDestroy,
    PLATFORM_ID,
    inject,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { DeviceCapabilityService } from '../functions/device-capability';

@Directive({
    selector: '[appReveal]',
    standalone: true,
    host: {
        '[class.reveal-init]': 'initialized',
    },
})
export class RevealOnScrollDirective implements AfterViewInit, OnDestroy {
    @Input('appReveal') variant: 'up' | 'fade' = 'up';
    @Input() revealDelay = 0;
    @Input() revealStagger = 0;

    initialized = false;

    private platformId = inject(PLATFORM_ID);
    private host = inject<ElementRef<HTMLElement>>(ElementRef);
    private destroyRef = inject(DestroyRef);
    private capability = inject(DeviceCapabilityService);

    private observer: IntersectionObserver | null = null;

    ngAfterViewInit() {
        if (!isPlatformBrowser(this.platformId)) return;

        const el = this.host.nativeElement;

        if (this.capability.prefersReducedMotion()) {
            el.classList.add('reveal-ready', 'is-visible');
            return;
        }

        if (typeof IntersectionObserver === 'undefined') {
            el.classList.add('reveal-ready', 'is-visible');
            return;
        }

        this.initialized = true;
        el.classList.add('reveal-ready', `reveal--${this.variant}`);
        if (this.revealDelay) el.style.setProperty('--reveal-delay', `${this.revealDelay}ms`);

        const fallbackTimer = window.setTimeout(() => {
            el.classList.add('is-visible');
        }, 4000);

        this.observer = new IntersectionObserver(
            (entries) => {
                for (const entry of entries) {
                    if (entry.isIntersecting) {
                        el.classList.add('is-visible');
                        this.observer?.disconnect();
                        window.clearTimeout(fallbackTimer);
                        break;
                    }
                }
            },
            { rootMargin: '0px 0px -10% 0px', threshold: 0.05 },
        );

        this.observer.observe(el);

        this.destroyRef.onDestroy(() => {
            window.clearTimeout(fallbackTimer);
            this.observer?.disconnect();
        });
    }

    ngOnDestroy() {
        this.observer?.disconnect();
    }
}
