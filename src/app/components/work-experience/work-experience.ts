import {
    AfterViewInit,
    ChangeDetectionStrategy,
    Component,
    DestroyRef,
    ElementRef,
    PLATFORM_ID,
    QueryList,
    ViewChild,
    ViewChildren,
    computed,
    inject,
    signal,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import type { gsap } from 'gsap';

type ExperienceType = 'professional' | 'academic' | 'personal';

interface Experience {
    type: ExperienceType;
    translationKeyIndex: number;
    technologies: string[];
}

@Component({
    selector: 'app-work-experience',
    standalone: true,
    imports: [TranslateModule],
    templateUrl: './work-experience.html',
    styleUrl: './work-experience.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WorkExperience implements AfterViewInit {
    @ViewChild('sectionRef') sectionRef!: ElementRef<HTMLElement>;
    @ViewChildren('cardRef') cardsRef!: QueryList<ElementRef<HTMLElement>>;

    private platformId = inject(PLATFORM_ID);
    private destroyRef = inject(DestroyRef);
    private gsapApi: typeof gsap | undefined;
    private gsapCtx: gsap.Context | undefined;
    private pendingAnimationTimer: ReturnType<typeof setTimeout> | undefined;

    activeTab = signal<ExperienceType>('professional');

    readonly experiences: readonly Experience[] = [
        {
            type: 'professional',
            translationKeyIndex: 1,
            technologies: ['React', 'TypeScript', 'Redux', 'Jest'],
        },
        {
            type: 'academic',
            translationKeyIndex: 2,
            technologies: ['Java', 'Spring Boot', 'MySQL', 'Thymeleaf'],
        },
        {
            type: 'personal',
            translationKeyIndex: 3,
            technologies: ['Angular', 'TypeScript', 'GSAP', 'SCSS'],
        },
    ];

    filteredExperiences = computed(() =>
        this.experiences.filter((exp) => exp.type === this.activeTab()),
    );

    async ngAfterViewInit() {
        if (!isPlatformBrowser(this.platformId)) return;

        let destroyed = false;
        this.destroyRef.onDestroy(() => {
            destroyed = true;
            clearTimeout(this.pendingAnimationTimer);
            this.gsapCtx?.revert();
        });

        const [{ gsap }, { ScrollTrigger }] = await Promise.all([
            import('gsap'),
            import('gsap/ScrollTrigger'),
        ]);
        if (destroyed) return;
        gsap.registerPlugin(ScrollTrigger);
        this.gsapApi = gsap;

        this.gsapCtx = gsap.context(() => {
            gsap.fromTo(
                this.sectionRef.nativeElement,
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    scrollTrigger: { trigger: this.sectionRef.nativeElement, start: 'top 80%' },
                },
            );
            this.animateCardsIn();
        });
    }

    setActiveTab(tab: ExperienceType) {
        if (this.activeTab() === tab) return;

        const gsap = this.gsapApi;
        if (!gsap) {
            this.activeTab.set(tab);
            return;
        }

        const cards = this.cardsRef.map((el) => el.nativeElement);
        gsap.to(cards, {
            opacity: 0,
            y: -20,
            duration: 0.2,
            stagger: 0.05,
            onComplete: () => {
                this.activeTab.set(tab);
                this.pendingAnimationTimer = setTimeout(() => this.animateCardsIn(), 50);
            },
        });
    }

    private animateCardsIn() {
        const gsap = this.gsapApi;
        if (!gsap) return;
        this.pendingAnimationTimer = setTimeout(() => {
            const cards = this.cardsRef.map((el) => el.nativeElement);
            gsap.fromTo(
                cards,
                { opacity: 0, y: 20 },
                { opacity: 1, y: 0, duration: 0.5, stagger: 0.15 },
            );
        }, 50);
    }
}
