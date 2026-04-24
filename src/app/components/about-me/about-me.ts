import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { RevealOnScrollDirective } from '../../utils/directives/reveal-on-scroll';

interface Skill {
    name: string;
    icon: string;
    color: string;
}

@Component({
    selector: 'app-about-me',
    standalone: true,
    imports: [TranslateModule, RevealOnScrollDirective],
    templateUrl: './about-me.html',
    styleUrl: './about-me.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutMe {
    readonly skills: readonly Skill[] = [
        { name: 'Angular', icon: 'fa-brands fa-angular', color: '#dd0031' },
        { name: 'React', icon: 'fa-brands fa-react', color: '#61dafb' },
        { name: 'Flutter', icon: 'fa-brands fa-flutter', color: '#02569b' },
        { name: 'Kotlin', icon: 'fa-brands fa-android', color: '#7f52ff' },
        { name: 'SASS', icon: 'fa-brands fa-sass', color: '#cc6699' },
        { name: 'Java Spring', icon: 'fa-brands fa-java', color: '#6db33f' },
        { name: 'Python', icon: 'fa-brands fa-python', color: '#3776ab' },
        { name: 'Node.js', icon: 'fa-brands fa-node-js', color: '#339933' },
        { name: 'Unity', icon: 'fa-brands fa-unity', color: '#ffffff' },
        { name: 'AWS', icon: 'fa-brands fa-aws', color: '#ff9900' },
        { name: 'Google Cloud', icon: 'fa-brands fa-google', color: '#4285f4' },
        { name: 'SQL', icon: 'fa-solid fa-database', color: '#003b57' },
        { name: 'MongoDB', icon: 'fa-solid fa-leaf', color: '#47a248' },
        { name: 'Git', icon: 'fa-brands fa-git-alt', color: '#f05032' },
        { name: 'Docker', icon: 'fa-brands fa-docker', color: '#2496ed' },
    ];
}
