import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { RevealOnScrollDirective } from '../../utils/directives/reveal-on-scroll';

export interface ProjectLink {
    labelKey: string;
    url: string;
}

export interface Project {
    id: number;
    technologies: string[];
    links: ProjectLink[];
    featured?: boolean;
}

@Component({
    selector: 'app-projects',
    standalone: true,
    imports: [TranslateModule, RevealOnScrollDirective, FaIconComponent],
    templateUrl: './projects.html',
    styleUrl: './projects.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsComponent {
    readonly projects: readonly Project[] = [
        {
            id: 1,
            featured: true,
            technologies: ['React', 'TypeScript', 'Node.js', 'AWS', 'International'],
            links: [
                {
                    labelKey: 'projectLinkFrontend',
                    url: 'https://github.com/Instituto-Maua-de-Tecnologia/coil_frontend',
                },
            ],
        },
        {
            id: 2,
            technologies: ['React Native', 'TypeScript', 'Node.js', 'AI / OCR', 'Face Recognition'],
            links: [
                {
                    labelKey: 'projectLinkFrontend',
                    url: 'https://github.com/alexZ7000/metro_passe_facil',
                },
                {
                    labelKey: 'projectLinkBackend',
                    url: 'https://github.com/LucaPinheiro/analise-metro-backend',
                },
            ],
        },
        {
            id: 3,
            technologies: ['TypeScript', 'React', 'Node.js', 'MongoDB'],
            links: [
                {
                    labelKey: 'projectLinkFrontend',
                    url: 'https://github.com/gabrielmerola/YE_GestaoDeSaude_Front',
                },
            ],
        },
        {
            id: 4,
            technologies: ['TypeScript', 'React', 'Node.js', 'SCSS'],
            links: [
                {
                    labelKey: 'projectLinkRepo',
                    url: 'https://github.com/alexZ7000/UsinaEcoCultural',
                },
            ],
        },
        {
            id: 5,
            technologies: ['Unity', 'C#', 'Game Design'],
            links: [
                {
                    labelKey: 'projectLinkRepo',
                    url: 'https://github.com/alexZ7000/TheZenOfCar',
                },
            ],
        },
        {
            id: 6,
            technologies: ['React', 'TypeScript', 'Vite', 'SWC', 'TailwindCSS', 'Jest'],
            links: [
                {
                    labelKey: 'projectLinkRepo',
                    url: 'https://github.com/alexZ7000/clean-react-template',
                },
            ],
        },
    ];
}
