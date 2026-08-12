import {
    AfterViewInit,
    ChangeDetectionStrategy,
    Component,
    DestroyRef,
    ElementRef,
    HostBinding,
    PLATFORM_ID,
    ViewChild,
    inject,
    signal,
} from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { isPlatformBrowser } from '@angular/common';
import { ThemeService } from '../../utils/functions/theme';
import { DeviceCapabilityService } from '../../utils/functions/device-capability';

@Component({
    selector: 'app-preloader',
    standalone: true,
    templateUrl: './preloader.html',
    styleUrl: './preloader.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PreloaderComponent implements AfterViewInit {
    @ViewChild('stage') stageRef!: ElementRef<HTMLDivElement>;

    private platformId = inject(PLATFORM_ID);
    private destroyRef = inject(DestroyRef);
    private sanitizer = inject(DomSanitizer);
    private theme = inject(ThemeService);
    private capability = inject(DeviceCapabilityService);

    svgHtml = signal<SafeHtml | null>(null);
    done = signal(false);
    hidden = signal(false);

    @HostBinding('class.is-done')
    get isDone() {
        return this.done();
    }

    @HostBinding('class.is-hidden')
    get isHidden() {
        return this.hidden();
    }

    async ngAfterViewInit() {
        if (!isPlatformBrowser(this.platformId)) {
            this.done.set(true);
            this.hidden.set(true);
            return;
        }

        if (this.capability.shouldReduceEffects()) {
            this.done.set(true);
            this.hidden.set(true);
            return;
        }

        const safetyTimer = window.setTimeout(() => {
            if (!this.done()) this.done.set(true);
            setTimeout(() => this.hidden.set(true), 400);
        }, 2200);
        this.destroyRef.onDestroy(() => window.clearTimeout(safetyTimer));

        try {
            const res = await fetch('dragonWhite.svg');
            if (!res.ok) throw new Error(`preloader-svg-${res.status}`);
            const text = await res.text();
            this.svgHtml.set(this.sanitizer.bypassSecurityTrustHtml(text));
        } catch {
            this.done.set(true);
            this.hidden.set(true);
            return;
        }

        await new Promise((r) => requestAnimationFrame(r));

        let gsap: typeof import('gsap').gsap;
        try {
            gsap = (await import('gsap')).gsap;
        } catch {
            this.done.set(true);
            this.hidden.set(true);
            return;
        }

        const svg = this.stageRef.nativeElement.querySelector('svg');
        if (!svg) {
            this.done.set(true);
            this.hidden.set(true);
            return;
        }

        svg.setAttribute('preserveAspectRatio', 'xMidYMid meet');
        const paths = Array.from(svg.querySelectorAll('path'));
        const accent = getComputedStyle(document.body).getPropertyValue('--accent').trim();
        const fallback = this.theme.isDarkTheme() ? '#00f2a1' : '#006400';
        const color = accent || fallback;
        const fillColor = color;

        const pathLengths = new WeakMap<SVGPathElement, number>();
        let pathsDrawable = true;
        try {
            paths.forEach((p) => {
                const el = p as SVGPathElement;
                pathLengths.set(el, el.getTotalLength());
            });
        } catch {
            pathsDrawable = false;
        }

        if (!pathsDrawable) {
            gsap.set(paths, { fill: fillColor, opacity: 1 });
            window.clearTimeout(safetyTimer);
            this.done.set(true);
            setTimeout(() => this.hidden.set(true), 500);
            return;
        }

        const lengthOf = (t: Element) => pathLengths.get(t as SVGPathElement) ?? 0;
        gsap.set(paths, {
            strokeDasharray: (_, t) => lengthOf(t),
            strokeDashoffset: (_, t) => lengthOf(t),
            stroke: color,
            strokeWidth: 35,
            fill: 'transparent',
            opacity: 1,
            filter: this.capability.isLowEnd() ? 'none' : `drop-shadow(0 0 12px ${color})`,
        });

        const tl = gsap
            .timeline({
                onComplete: () => {
                    window.clearTimeout(safetyTimer);
                    this.done.set(true);
                    setTimeout(() => this.hidden.set(true), 900);
                },
            })
            .to(paths, {
                strokeDashoffset: 0,
                duration: 2.4,
                ease: 'power2.inOut',
                stagger: 0.012,
            })
            .to(paths, { fill: fillColor, duration: 0.7, ease: 'power2.in' }, '-=0.8');

        this.destroyRef.onDestroy(() => tl.kill());
    }
}
