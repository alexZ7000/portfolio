import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { RevealOnScrollDirective } from '../../utils/directives/reveal-on-scroll';

interface Skill {
    name: string;
    icon: IconProp;
    color: string;
}

@Component({
    selector: 'app-about-me',
    standalone: true,
    imports: [TranslateModule, RevealOnScrollDirective, FaIconComponent],
    templateUrl: './about-me.html',
    styleUrl: './about-me.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutMe {
    readonly skills: readonly Skill[] = [
        { name: 'Angular', icon: ['fab', 'angular'], color: '#dd0031' },
        { name: 'React', icon: ['fab', 'react'], color: '#61dafb' },
        { name: 'Flutter', icon: ['fab', 'flutter'], color: '#02569b' },
        { name: 'Kotlin', icon: ['fab', 'android'], color: '#7f52ff' },
        { name: 'SASS', icon: ['fab', 'sass'], color: '#cc6699' },
        { name: 'Java Spring', icon: ['fab', 'java'], color: '#6db33f' },
        { name: 'Python', icon: ['fab', 'python'], color: '#3776ab' },
        { name: 'Node.js', icon: ['fab', 'node-js'], color: '#339933' },
        { name: 'Unity', icon: ['fab', 'unity'], color: '#ffffff' },
        { name: 'AWS', icon: ['fab', 'aws'], color: '#ff9900' },
        { name: 'Google Cloud', icon: ['fab', 'google'], color: '#4285f4' },
        { name: 'SQL', icon: ['fas', 'database'], color: '#003b57' },
        { name: 'MongoDB', icon: ['fas', 'leaf'], color: '#47a248' },
        { name: 'Git', icon: ['fab', 'git-alt'], color: '#f05032' },
        { name: 'Docker', icon: ['fab', 'docker'], color: '#2496ed' },
    ];
}
