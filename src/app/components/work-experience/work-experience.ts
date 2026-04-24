import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { RevealOnScrollDirective } from '../../utils/directives/reveal-on-scroll';

type ExperienceType = 'professional' | 'academic' | 'personal';

interface Experience {
    type: ExperienceType;
    translationKeyIndex: number;
    technologies: string[];
}

@Component({
    selector: 'app-work-experience',
    standalone: true,
    imports: [TranslateModule, RevealOnScrollDirective, FaIconComponent],
    templateUrl: './work-experience.html',
    styleUrl: './work-experience.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WorkExperience {
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

    setActiveTab(tab: ExperienceType) {
        if (this.activeTab() === tab) return;
        this.activeTab.set(tab);
    }
}
