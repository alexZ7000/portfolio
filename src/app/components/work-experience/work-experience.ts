import {
    Component,
    ElementRef,
    ViewChild,
    AfterViewInit,
    ViewChildren,
    QueryList,
    inject,
    PLATFORM_ID,
    signal,
} from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

type ExperienceType = 'professional' | 'academic' | 'personal';

@Component({
    selector: 'app-work-experience',
    standalone: true,
    imports: [CommonModule, TranslateModule],
    templateUrl: './work-experience.html',
    styleUrl: './work-experience.scss',
})
export class WorkExperience implements AfterViewInit {
    @ViewChild('sectionRef') sectionRef!: ElementRef;
    @ViewChildren('cardRef') cardsRef!: QueryList<ElementRef>;

    platformId = inject(PLATFORM_ID);
    activeTab = signal<ExperienceType>('professional');

    experiences = [
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
            technologies: ['Vite', 'React', 'TypeScript', 'TailwindCSS'],
        },
    ];

    get filteredExperiences() {
        return this.experiences.filter((exp) => exp.type === this.activeTab());
    }

    ngAfterViewInit() {
        if (isPlatformBrowser(this.platformId)) {
            gsap.registerPlugin(ScrollTrigger);

            gsap.fromTo(
                this.sectionRef.nativeElement,
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    scrollTrigger: {
                        trigger: this.sectionRef.nativeElement,
                        start: 'top 80%',
                    },
                },
            );

            this.animateCardsIn();
        }
    }

    setActiveTab(tab: ExperienceType) {
        if (this.activeTab() === tab) return;

        if (isPlatformBrowser(this.platformId)) {
            const cards = this.cardsRef.map((el) => el.nativeElement);
            gsap.to(cards, {
                opacity: 0,
                y: -20,
                duration: 0.2,
                stagger: 0.1,
                onComplete: () => {
                    this.activeTab.set(tab);
                    setTimeout(() => this.animateCardsIn(), 50);
                },
            });
        } else {
            this.activeTab.set(tab);
        }
    }

    private animateCardsIn() {
        setTimeout(() => {
            const cards = this.cardsRef.map((el) => el.nativeElement);
            gsap.fromTo(
                cards,
                { opacity: 0, y: 20 },
                { opacity: 1, y: 0, duration: 0.5, stagger: 0.2 },
            );
        }, 100);
    }
}
