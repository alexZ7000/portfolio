import { Component, ElementRef, ViewChild, AfterViewInit, effect, inject, PLATFORM_ID, OnDestroy, Injector, EffectRef } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { gsap } from 'gsap';
import { ThemeService } from "../../utils/functions/theme";

@Component({
    selector: 'app-dragon-animation',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './dragon-animation.html',
    styleUrl: './dragon-animation.scss'
})
export class DragonAnimationComponent implements AfterViewInit, OnDestroy {
    @ViewChild('dragonSvg') dragonSvg!: ElementRef<SVGElement>;

    public themeService = inject(ThemeService);
    private platformId = inject(PLATFORM_ID);
    private injector = inject(Injector);

    private ctx: gsap.Context | undefined;
    private themeEffect: EffectRef | undefined;
    private mouseSpeed = 0;
    private isBreathingFire = false;
    private blinkTimer: any;

    private idleTimer: any;

    constructor() {}

    ngAfterViewInit() {
        if (isPlatformBrowser(this.platformId)) {
            setTimeout(() => {
                this.themeEffect = effect(() => {
                    const isDark = this.themeService.isDarkTheme();
                    if (this.dragonSvg) {
                        this.initAnimation(isDark);
                    }
                }, { injector: this.injector });
            }, 100);
        }
    }

    ngOnDestroy() {
        this.ctx?.revert();
        this.themeEffect?.destroy();
        if (isPlatformBrowser(this.platformId)) {
            window.removeEventListener('mousemove', this.handleMouseMove);
            gsap.ticker.remove(this.monitorMouseSpeed);
            clearTimeout(this.blinkTimer);
        }
    }

    private initAnimation(isDarkTheme: boolean) {
        this.ctx?.revert();
        clearTimeout(this.blinkTimer);

        this.ctx = gsap.context(() => {
            const svg = this.dragonSvg.nativeElement;
            const wrapper = svg.querySelector('#dragon-wrapper');
            const geometryGroup = svg.querySelector('#dragon-geometry');
            const paths = svg.querySelectorAll('path');

            const chestParts = svg.querySelectorAll('.dragon-chest');
            const bellyParts = svg.querySelectorAll('.dragon-belly');
            const torsoMain = svg.querySelector('#dragon-main-torso');

            const pupil = svg.querySelector('#dragon-pupil');
            const eyeWrapper = svg.querySelector('#eye-wrapper');

            gsap.set(eyeWrapper, { scaleY: 1 })

            const pupilColor = isDarkTheme ? '#affff0' : '#000000';
            gsap.set(pupil, { fill: pupilColor });

            const mainColor = isDarkTheme ? '#00f2a1' : '#006400';

            gsap.set(paths, {
                strokeDasharray: (_, target) => (target as SVGPathElement).getTotalLength(),
                strokeDashoffset: (_, target) => (target as SVGPathElement).getTotalLength(),
                stroke: mainColor,
                strokeWidth: 35,
                fill: 'transparent',
                opacity: 1,
                filter: "drop-shadow(0px 0px 8px rgba(0, 242, 161, 0.5))"
            });
            gsap.set(wrapper, { opacity: 1, scale: 0.8, y: 50 });
            gsap.set(geometryGroup, { fill: 'transparent' });

            const tl = gsap.timeline();

            tl.to(wrapper, { opacity: 1, duration: 0.5 })
                .to(paths, {
                    strokeDashoffset: 0,
                    duration: 2.5,
                    ease: 'power2.inOut',
                    stagger: 0.01
                })
                .to(wrapper, {
                    scale: 1,
                    y: 0,
                    duration: 2,
                    ease: 'power2.out'
                }, "-=2.0")
                .to(geometryGroup, {
                    fill: mainColor,
                    duration: 1,
                    ease: 'power2.in'
                }, "-=0.5");

            const breathParts = [...Array.from(chestParts), ...Array.from(bellyParts), torsoMain];
            if (breathParts.length > 0) {
                gsap.set(breathParts, { transformOrigin: "50% 60%" });
                gsap.to(breathParts, {
                    scale: 1.04,
                    duration: 3,
                    repeat: -1,
                    yoyo: true,
                    ease: "sine.inOut"
                });
            }

            gsap.to(wrapper, {
                y: '-=15',
                duration: 4,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut"
            });

            this.startBlinkingLoop();

            window.addEventListener('mousemove', this.handleMouseMove);
            gsap.ticker.add(this.monitorMouseSpeed);

        }, this.dragonSvg);
    }

    private startBlinkingLoop() {
        const blink = () => {
            const svg = this.dragonSvg?.nativeElement;
            const eyeWrapper = svg?.querySelector('#eye-wrapper');
            if(eyeWrapper) {
                gsap.to(eyeWrapper, {
                    scaleY: 0.1,
                    duration: 0.15,
                    yoyo: true,
                    repeat: 1,
                    onComplete: () => {
                        gsap.set(eyeWrapper, { scaleY: 1 });
                    }
                });
            }
            setTimeout(blink, Math.random() * 4000 + 4000);
        };
        setTimeout(blink, 2000);
    }

    private monitorMouseSpeed = () => {
        this.mouseSpeed *= 0.92;
    }

    private handleMouseMove = (event: MouseEvent) => {
        if (!this.dragonSvg) return;
        const wrapper = this.dragonSvg.nativeElement.querySelector('#dragon-wrapper');
        const pupil = this.dragonSvg.nativeElement.querySelector('#dragon-pupil');
        const eyeOutline = this.dragonSvg.nativeElement.querySelector('#dragon-eye-outline');

        const { clientX, clientY } = event;
        const xPos = (clientX / window.innerWidth - 0.5);
        const yPos = (clientY / window.innerHeight - 0.5);

        gsap.to(wrapper, {
            rotationY: xPos * 12,
            rotationX: -yPos * 8,
            x: xPos * 25,
            y: yPos * 25,
            duration: 1.5,
            ease: 'power2.out'
        });

        if (pupil && eyeOutline) {
            const eyeRect = eyeOutline.getBoundingClientRect();
            const pupilCenterX = eyeRect.left + eyeRect.width / 2;
            const pupilCenterY = eyeRect.top + eyeRect.height / 2;

            const dx = clientX - pupilCenterX;
            const dy = clientY - pupilCenterY;
            const angle = Math.atan2(dy, dx);
            const distance = Math.sqrt(dx * dx + dy * dy);

            let maxDistance = 35;

            if (dx > 0 && dy > 0) {
                maxDistance = 65;
            } else if (dx > 0) {
                maxDistance = 45;
            }

            const moveDistance = Math.min(distance, maxDistance);

            const pupilX = Math.cos(angle) * moveDistance * 1.2;
            const pupilY = Math.sin(angle) * moveDistance * 1.2;

            gsap.to(pupil, {
                x: -pupilX,
                y: -pupilY,
                duration: 0.1,
                overwrite: 'auto'
            });

            clearTimeout(this.idleTimer);
            this.idleTimer = setTimeout(() => {
                gsap.to(pupil, { x: 0, y: 0, duration: 1, ease: 'power2.inOut' });
            }, 2000);
        }
    };

    public onDragonClick() {
        if (this.isBreathingFire) return;
        this.isBreathingFire = true;

        const svg = this.dragonSvg.nativeElement;
        const fireContainer = svg.querySelector('#fire-container') as SVGGElement;
        const wrapper = svg.querySelector('#dragon-wrapper');
        const mouthLocator = svg.querySelector('#mouth-locator') as SVGGraphicsElement;
        const head = svg.querySelector('#dragon-head') as SVGGraphicsElement;

        const lightOverlay = document.querySelector('.screen-fire-light') as HTMLElement;

        if (!fireContainer || !wrapper || !mouthLocator || !head) {
            console.error("Elementos faltando.");
            this.isBreathingFire = false;
            return;
        }

        const svgRect = svg.getBoundingClientRect();
        const locatorRect = mouthLocator.getBoundingClientRect();
        const scaleX = 1024 / svgRect.width;
        const scaleY = 1024 / svgRect.height;
        const startX = (locatorRect.left - svgRect.left + (locatorRect.width / 2)) * scaleX;
        const startY = (locatorRect.top - svgRect.top + (locatorRect.height / 2)) * scaleY;

        const screenX = locatorRect.left + (locatorRect.width / 2);
        const screenY = locatorRect.top + (locatorRect.height / 2);

        if (lightOverlay) {
            lightOverlay.style.setProperty('--light-x', `${screenX}px`);
            lightOverlay.style.setProperty('--light-y', `${screenY}px`);
            const lightTl = gsap.timeline();
            lightTl.to(lightOverlay, { opacity: 1, duration: 0.05, ease: "power2.out" })
                .to(lightOverlay, { opacity: 0.6, duration: 0.08, yoyo: true, repeat: 8, ease: "rough({ strength: 2, points: 10, randomize: true })" })
                .to(lightOverlay, { opacity: 0, duration: 0.4, ease: "power2.in" });
        }

        const jaw = svg.querySelector('#dragon-jaw') as SVGGraphicsElement;
        const pupil = svg.querySelector('#dragon-pupil');

        if(pupil) {
            gsap.to(pupil, { attr: { r: 80 }, fill: '#fff', duration: 0.2, yoyo: true, repeat: 1 });
        }

        gsap.set(head, { transformOrigin: "100% 100%" });
        gsap.set(jaw, { transformOrigin: "100% 0%" });

        gsap.to(jaw, { rotation: -25, duration: 0.15, ease: "back.out(2)" });
        gsap.to(jaw, { rotation: 0, duration: 0.4, ease: "power2.inOut", delay: 0.3 });

        gsap.to(wrapper, { x: -15, rotation: 5, duration: 0.1, yoyo: true, repeat: 1, ease: "power2.out" });

        const flash = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        flash.setAttribute("cx", startX.toString());
        flash.setAttribute("cy", startY.toString());
        flash.setAttribute("r", "10");
        flash.setAttribute("fill", "#ffffff");
        flash.style.opacity = "1";
        flash.style.filter = "blur(4px)";
        fireContainer.appendChild(flash);

        gsap.to(flash, { r: 180, opacity: 0, duration: 0.25, ease: "power3.out", onComplete: () => flash.remove() });

        const particleCount = 60;
        for (let i = 0; i < particleCount; i++) {
            const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
            const startR = Math.random() * 20 + 15;
            circle.setAttribute("r", startR.toString());
            circle.setAttribute("cx", startX.toString());
            circle.setAttribute("cy", startY.toString());
            circle.setAttribute("fill", "url(#fireGradient)");
            circle.setAttribute("filter", "url(#magmaFire)");
            circle.style.opacity = "0";
            fireContainer.appendChild(circle);

            const angleBase = 0.6;
            const spread = 0.25;
            const angle = angleBase + (Math.random() * spread - (spread/2));
            const velocity = 600 + Math.random() * 400;
            const destX = startX + Math.cos(angle) * velocity;
            const destY = startY + Math.sin(angle) * velocity;

            gsap.timeline({ onComplete: () => { circle.remove(); if (i === particleCount - 1) this.isBreathingFire = false; } })
                .to(circle, { opacity: 1, duration: 0.05, delay: i * 0.008 })
                .to(circle, { attr: { cx: destX, cy: destY, r: startR * 4 }, opacity: 0, duration: 0.6 + Math.random() * 0.4, ease: 'power1.out' }, "<");
        }
    }
}
