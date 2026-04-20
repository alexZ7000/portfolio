import {
    AfterViewInit,
    ChangeDetectionStrategy,
    Component,
    DestroyRef,
    ElementRef,
    Injector,
    OnDestroy,
    PLATFORM_ID,
    ViewChild,
    effect,
    inject,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { ThemeService } from '../../utils/functions/theme';
import type { gsap } from 'gsap';

type GsapApi = typeof gsap;

@Component({
    selector: 'app-dragon-animation',
    standalone: true,
    templateUrl: './dragon-animation.html',
    styleUrl: './dragon-animation.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DragonAnimationComponent implements AfterViewInit, OnDestroy {
    @ViewChild('dragonSvg') dragonSvg!: ElementRef<SVGElement>;

    readonly themeService = inject(ThemeService);
    private platformId = inject(PLATFORM_ID);
    private injector = inject(Injector);
    private destroyRef = inject(DestroyRef);

    private gsapApi: GsapApi | undefined;
    private ctx: gsap.Context | undefined;
    private scrollTriggerApi: { kill: () => void }[] = [];
    private isBreathingFire = false;

    async ngAfterViewInit() {
        if (!isPlatformBrowser(this.platformId)) return;

        let destroyed = false;
        this.destroyRef.onDestroy(() => {
            destroyed = true;
            this.cleanup();
        });

        const [{ gsap }, { ScrollTrigger }] = await Promise.all([
            import('gsap'),
            import('gsap/ScrollTrigger'),
        ]);
        if (destroyed) return;
        gsap.registerPlugin(ScrollTrigger);
        this.gsapApi = gsap;

        effect(
            () => {
                const isDark = this.themeService.isDarkTheme();
                if (this.dragonSvg) this.initAnimation(isDark, ScrollTrigger);
            },
            { injector: this.injector },
        );
    }

    ngOnDestroy() {
        this.cleanup();
    }

    private cleanup() {
        this.ctx?.revert();
        this.scrollTriggerApi.forEach((t) => t.kill());
        this.scrollTriggerApi = [];
        if (isPlatformBrowser(this.platformId)) {
            window.removeEventListener('mousemove', this.handleMouseMove);
        }
    }

    private initAnimation(isDarkTheme: boolean, ScrollTrigger: typeof import('gsap/ScrollTrigger').ScrollTrigger) {
        const gsap = this.gsapApi;
        if (!gsap) return;

        this.ctx?.revert();
        this.scrollTriggerApi.forEach((t) => t.kill());
        this.scrollTriggerApi = [];

        this.ctx = gsap.context(() => {
            const svg = this.dragonSvg.nativeElement;
            const wrapper = svg.querySelector('#dragon-wrapper') as SVGGElement | null;
            const geometryGroup = svg.querySelector('#dragon-geometry') as SVGGElement | null;
            const paths = svg.querySelectorAll('path');
            const fillablePaths = svg.querySelectorAll('path:not(#dragon-eye-outline)');
            const eyeOutline = svg.querySelector('#dragon-eye-outline') as SVGPathElement | null;
            const pupil = svg.querySelector('#dragon-pupil') as SVGCircleElement | null;
            const eyeWrapper = svg.querySelector('#eye-wrapper') as SVGGElement | null;

            gsap.set(eyeWrapper, { scaleY: 1 });
            gsap.set(pupil, { fill: isDarkTheme ? '#affff0' : '#001a10' });

            const bodyStyle = getComputedStyle(document.body);
            const accent = bodyStyle.getPropertyValue('--accent').trim();
            const bg = bodyStyle.getPropertyValue('--bg').trim();
            const mainColor = accent || (isDarkTheme ? '#00f2a1' : '#006400');
            const eyeFillColor = bg || (isDarkTheme ? '#0a0e14' : '#f3f4f6');
            const fillColor = mainColor;
            const glow = `drop-shadow(0 0 10px ${mainColor})`;

            gsap.set(paths, {
                strokeDasharray: (_, target) => (target as SVGPathElement).getTotalLength(),
                strokeDashoffset: (_, target) => (target as SVGPathElement).getTotalLength(),
                stroke: mainColor,
                strokeWidth: 35,
                fill: 'transparent',
                opacity: 1,
                filter: glow,
            });
            gsap.set(wrapper, { opacity: 1, scale: 0.8, y: 50 });
            gsap.set(geometryGroup, { fill: 'transparent' });

            gsap.timeline()
                .to(wrapper, { opacity: 1, duration: 0.5 })
                .to(paths, {
                    strokeDashoffset: 0,
                    duration: 2.5,
                    ease: 'power2.inOut',
                    stagger: 0.01,
                })
                .to(wrapper, { scale: 1, y: 0, duration: 2, ease: 'power2.out' }, '-=2.0')
                .to(
                    fillablePaths,
                    { fill: fillColor, duration: 1, ease: 'power2.inOut' },
                    '-=1.2',
                )
                .to(
                    paths,
                    { strokeWidth: 8, duration: 0.8, ease: 'power2.out' },
                    '<',
                )
                .to(geometryGroup, { fill: fillColor, duration: 0.5, ease: 'power2.out' }, '<')
                .to(eyeOutline, { fill: eyeFillColor, duration: 0.6, ease: 'power2.out' }, '<');

            const scrollTween = gsap.to(wrapper, {
                rotation: -10,
                y: -60,
                scale: 0.92,
                ease: 'none',
                scrollTrigger: {
                    trigger: this.dragonSvg.nativeElement,
                    start: 'top top',
                    end: 'bottom top',
                    scrub: 0.6,
                    invalidateOnRefresh: true,
                },
            });
            if (scrollTween.scrollTrigger) this.scrollTriggerApi.push(scrollTween.scrollTrigger);

            const parallax = gsap.to(wrapper, {
                yPercent: 12,
                ease: 'none',
                scrollTrigger: {
                    trigger: this.dragonSvg.nativeElement,
                    start: 'top 80%',
                    end: 'bottom top',
                    scrub: 1,
                },
            });
            if (parallax.scrollTrigger) this.scrollTriggerApi.push(parallax.scrollTrigger);

            window.addEventListener('mousemove', this.handleMouseMove, { passive: true });
        }, this.dragonSvg);
    }

    private handleMouseMove = (event: MouseEvent) => {
        const gsap = this.gsapApi;
        if (!gsap || !this.dragonSvg) return;

        const svg = this.dragonSvg.nativeElement;
        const wrapper = svg.querySelector('#dragon-wrapper');
        const pupil = svg.querySelector('#dragon-pupil');
        const eyeOutline = svg.querySelector('#dragon-eye-outline');

        const xPos = event.clientX / window.innerWidth - 0.5;
        const yPos = event.clientY / window.innerHeight - 0.5;

        gsap.to(wrapper, {
            rotationY: xPos * 12,
            rotationX: -yPos * 8,
            x: xPos * 25,
            y: yPos * 25,
            duration: 1.5,
            ease: 'power2.out',
            overwrite: 'auto',
        });

        if (!pupil || !eyeOutline) return;

        const eyeRect = eyeOutline.getBoundingClientRect();
        const dx = event.clientX - (eyeRect.left + eyeRect.width / 2);
        const dy = event.clientY - (eyeRect.top + eyeRect.height / 2);
        const angle = Math.atan2(dy, dx);
        const distance = Math.hypot(dx, dy);

        const maxDistance = dx > 0 && dy > 0 ? 65 : dx > 0 ? 45 : 35;
        const moveDistance = Math.min(distance, maxDistance);
        const pupilX = Math.cos(angle) * moveDistance * 1.2;
        const pupilY = Math.sin(angle) * moveDistance * 1.2;

        gsap.to(pupil, { x: -pupilX, y: -pupilY, duration: 0.1, overwrite: 'auto' });
    };

    onDragonClick() {
        const gsap = this.gsapApi;
        if (!gsap || this.isBreathingFire) return;
        this.isBreathingFire = true;

        const svg = this.dragonSvg.nativeElement;
        const fireContainer = svg.querySelector('#fire-container') as SVGGElement | null;
        const wrapper = svg.querySelector('#dragon-wrapper');
        const mouthLocator = svg.querySelector('#mouth-locator') as SVGGraphicsElement | null;
        const head = svg.querySelector('#dragon-head') as SVGGraphicsElement | null;
        const lightOverlay = document.querySelector('.screen-fire-light') as HTMLElement | null;

        if (!fireContainer || !wrapper || !mouthLocator || !head) {
            this.isBreathingFire = false;
            return;
        }

        const svgRect = svg.getBoundingClientRect();
        const locatorRect = mouthLocator.getBoundingClientRect();
        const scaleX = 1024 / svgRect.width;
        const scaleY = 1024 / svgRect.height;
        const startX = (locatorRect.left - svgRect.left + locatorRect.width / 2) * scaleX;
        const startY = (locatorRect.top - svgRect.top + locatorRect.height / 2) * scaleY;

        if (lightOverlay) {
            const screenX = locatorRect.left + locatorRect.width / 2;
            const screenY = locatorRect.top + locatorRect.height / 2;
            lightOverlay.style.setProperty('--light-x', `${screenX}px`);
            lightOverlay.style.setProperty('--light-y', `${screenY}px`);
            gsap.timeline()
                .to(lightOverlay, { opacity: 1, duration: 0.05, ease: 'power2.out' })
                .to(lightOverlay, {
                    opacity: 0.6,
                    duration: 0.08,
                    yoyo: true,
                    repeat: 8,
                    ease: 'rough({ strength: 2, points: 10, randomize: true })',
                })
                .to(lightOverlay, { opacity: 0, duration: 0.4, ease: 'power2.in' });
        }

        const jaw = svg.querySelector('#dragon-jaw') as SVGGraphicsElement | null;
        const pupil = svg.querySelector('#dragon-pupil');

        if (pupil) {
            gsap.to(pupil, { attr: { r: 80 }, fill: '#fff', duration: 0.2, yoyo: true, repeat: 1 });
        }

        gsap.set(head, { transformOrigin: '100% 100%' });
        if (jaw) {
            gsap.set(jaw, { transformOrigin: '100% 0%' });
            gsap.to(jaw, { rotation: -25, duration: 0.15, ease: 'back.out(2)' });
            gsap.to(jaw, { rotation: 0, duration: 0.4, ease: 'power2.inOut', delay: 0.3 });
        }
        gsap.to(wrapper, { x: -15, rotation: 5, duration: 0.1, yoyo: true, repeat: 1, ease: 'power2.out' });

        const flash = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        flash.setAttribute('cx', startX.toString());
        flash.setAttribute('cy', startY.toString());
        flash.setAttribute('r', '10');
        flash.setAttribute('fill', '#ffffff');
        flash.style.opacity = '1';
        flash.style.filter = 'blur(4px)';
        fireContainer.appendChild(flash);
        gsap.to(flash, { r: 180, opacity: 0, duration: 0.25, ease: 'power3.out', onComplete: () => flash.remove() });

        const particleCount = 60;
        for (let i = 0; i < particleCount; i++) {
            const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
            const startR = Math.random() * 20 + 15;
            circle.setAttribute('r', startR.toString());
            circle.setAttribute('cx', startX.toString());
            circle.setAttribute('cy', startY.toString());
            circle.setAttribute('fill', 'url(#fireGradient)');
            circle.setAttribute('filter', 'url(#magmaFire)');
            circle.style.opacity = '0';
            fireContainer.appendChild(circle);

            const angle = 0.6 + (Math.random() * 0.25 - 0.125);
            const velocity = 600 + Math.random() * 400;
            const destX = startX + Math.cos(angle) * velocity;
            const destY = startY + Math.sin(angle) * velocity;

            gsap.timeline({
                onComplete: () => {
                    circle.remove();
                    if (i === particleCount - 1) this.isBreathingFire = false;
                },
            })
                .to(circle, { opacity: 1, duration: 0.05, delay: i * 0.008 })
                .to(
                    circle,
                    {
                        attr: { cx: destX, cy: destY, r: startR * 4 },
                        opacity: 0,
                        duration: 0.6 + Math.random() * 0.4,
                        ease: 'power1.out',
                    },
                    '<',
                );
        }
    }
}
