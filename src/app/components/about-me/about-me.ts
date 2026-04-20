import {
    Component,
    ElementRef,
    ViewChild,
    AfterViewInit,
    ViewChildren,
    QueryList,
    inject,
    PLATFORM_ID,
} from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
    selector: 'app-about-me',
    standalone: true,
    imports: [CommonModule, TranslateModule],
    templateUrl: './about-me.html',
    styleUrl: './about-me.scss',
})
export class AboutMe implements AfterViewInit {
    @ViewChild('sectionRef') sectionRef!: ElementRef;
    @ViewChildren('skillRef') skillsRef!: QueryList<ElementRef>;
    @ViewChildren('skillRef') skillRefs!: QueryList<ElementRef>;

    platformId = inject(PLATFORM_ID);

    skills = [
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
        { name: 'Docker', icon: 'fa-brands fa-docker', color: '#2496ed' }
    ];

    ngAfterViewInit() {
        if (isPlatformBrowser(this.platformId)) {
            gsap.registerPlugin(ScrollTrigger);
            this.initAnimations();
        }
        if (this.skillRefs && this.skillRefs.length > 0) {
            gsap.from(this.skillRefs.map(r => r.nativeElement), {
                scrollTrigger: {
                    trigger: '#about-me',
                    start: 'top 80%',
                },
                y: 50,
                opacity: 0,
                duration: 0.8,
                stagger: 0.1,
                ease: 'back.out(1.7)'
            });
        }
    }

    private initAnimations() {
        const section = this.sectionRef.nativeElement;
        const skillsElements = this.skillsRef.map((el) => el.nativeElement);

        gsap.fromTo(
            section,
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                scrollTrigger: {
                    trigger: section,
                    start: 'top 80%',
                },
            },
        );

        gsap.fromTo(
            skillsElements,
            { opacity: 0, y: 20 },
            {
                opacity: 1,
                y: 0,
                duration: 0.5,
                stagger: 0.1,
                scrollTrigger: {
                    trigger: section,
                    start: 'top 70%',
                },
            },
        );
    }
}
