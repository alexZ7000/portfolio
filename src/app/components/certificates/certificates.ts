import { Component, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
    selector: 'app-certificates',
    standalone: true,
    imports: [CommonModule, TranslateModule],
    templateUrl: './certificates.html',
    styleUrl: './certificates.scss'
})
export class CertificatesComponent implements AfterViewInit {
    certificates = [
        {
            name: 'Angular - The Complete Guide',
            issuer: 'Udemy',
            date: '2023',
            link: 'link-para-o-pdf'
        },
        {
            name: 'AWS Cloud Practitioner',
            issuer: 'Amazon Web Services',
            date: '2024',
            link: '#'
        },
        {
            name: 'Full Stack Development',
            issuer: 'Digital House',
            date: '2022',
            link: '#'
        },
    ];

    constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

    ngAfterViewInit() {
        if (isPlatformBrowser(this.platformId)) {
            this.animateEntrance();
        }
    }

    animateEntrance() {
        gsap.from('.cert-card-wrapper', {
            scrollTrigger: {
                trigger: '#certificates',
                start: 'top 80%',
            },
            y: 100,
            opacity: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: 'power3.out'
        });
    }

    onMouseMove(e: MouseEvent, index: number) {
        if (!isPlatformBrowser(this.platformId)) return;

        const card = document.getElementById(`cert-card-${index}`);
        const glare = document.getElementById(`cert-glare-${index}`);

        if (!card || !glare) return;

        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -10;
        const rotateY = ((x - centerX) / centerX) * 10;

        gsap.to(card, {
            rotationX: rotateX,
            rotationY: rotateY,
            transformPerspective: 1000,
            duration: 0.1,
            ease: 'power1.out'
        });

        gsap.to(glare, {
            x: x - (rect.width * 0.5),
            y: y - (rect.height * 0.5),
            opacity: 0.4,
            duration: 0.1
        });
    }

    onMouseLeave(index: number) {
        const card = document.getElementById(`cert-card-${index}`);
        const glare = document.getElementById(`cert-glare-${index}`);

        gsap.to(card, {
            rotationX: 0,
            rotationY: 0,
            duration: 0.5,
            ease: 'elastic.out(1, 0.5)'
        });

        gsap.to(glare, {
            opacity: 0,
            duration: 0.5
        });
    }

    openCertificate(link: string) {
        if (link && link !== '#') {
            window.open(link, '_blank');
        }
    }
}
