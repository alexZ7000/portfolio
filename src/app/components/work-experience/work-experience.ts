import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { RevealOnScrollDirective } from '../../utils/directives/reveal-on-scroll';

type ExperienceType = 'professional' | 'academic' | 'personal';

interface Experience {
    type: ExperienceType;
    translationKeyIndex: number;
    technologies: string[];
    companyUrl?: string;
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
            technologies: ['Windows Server', 'Linux', 'Hardware', 'Redes', 'Suporte'],
            companyUrl: 'https://novarutra.com.br',
        },
        {
            type: 'professional',
            translationKeyIndex: 2,
            technologies: ['Java 6/8', 'JBoss', 'WildFly', 'JSF', 'AWS', 'Docker'],
        },
        {
            type: 'academic',
            translationKeyIndex: 3,
            technologies: ['Java', 'Python', 'C', 'Clojure', 'Algoritmos'],
        },
        {
            type: 'academic',
            translationKeyIndex: 4,
            technologies: ['Python', 'Game AI', 'Heurísticas'],
        },
        {
            type: 'personal',
            translationKeyIndex: 5,
            technologies: ['Unity', 'C#', 'Game Design', 'Liderança'],
        },
        {
            type: 'personal',
            translationKeyIndex: 6,
            technologies: ['React', 'Next.js', 'Angular', 'Node.js', 'Mentoria'],
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
