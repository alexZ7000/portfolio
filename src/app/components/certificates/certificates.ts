import {
    AfterViewInit,
    ChangeDetectionStrategy,
    Component,
    DestroyRef,
    ElementRef,
    PLATFORM_ID,
    QueryList,
    ViewChildren,
    inject,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import type { gsap } from 'gsap';

interface Certificate {
    name: string;
    issuer: string;
    date: string;
    link: string;
}

@Component({
    selector: 'app-certificates',
    standalone: true,
    imports: [TranslateModule],
    templateUrl: './certificates.html',
    styleUrl: './certificates.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CertificatesComponent implements AfterViewInit {
    @ViewChildren('cardRef') cardRefs!: QueryList<ElementRef<HTMLElement>>;
    @ViewChildren('glareRef') glareRefs!: QueryList<ElementRef<HTMLElement>>;

    private platformId = inject(PLATFORM_ID);
    private destroyRef = inject(DestroyRef);
    private gsapCtx: gsap.Context | undefined;
    private gsapApi: typeof gsap | undefined;

    readonly certificates: readonly Certificate[] = [
        { name: 'Angular - The Complete Guide', issuer: 'Udemy', date: '2023', link: '#' },
        { name: 'AWS Cloud Practitioner', issuer: 'Amazon Web Services', date: '2024', link: '#' },
        { name: 'Full Stack Development', issuer: 'Digital House', date: '2022', link: '#' },
    ];

    async ngAfterViewInit() {
        if (!isPlatformBrowser(this.platformId)) return;

        let destroyed = false;
        this.destroyRef.onDestroy(() => {
            destroyed = true;
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
            gsap.from('.cert-card-wrapper', {
                scrollTrigger: { trigger: '#certificates', start: 'top 80%' },
                y: 100,
                opacity: 0,
                duration: 0.8,
                stagger: 0.15,
                ease: 'power3.out',
            });
        });
    }

    onMouseMove(e: MouseEvent, index: number) {
        const gsap = this.gsapApi;
        if (!gsap) return;

        const card = this.cardRefs.get(index)?.nativeElement;
        const glare = this.glareRefs.get(index)?.nativeElement;
        if (!card || !glare) return;

        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const rotateX = ((y - rect.height / 2) / (rect.height / 2)) * -10;
        const rotateY = ((x - rect.width / 2) / (rect.width / 2)) * 10;

        gsap.to(card, {
            rotationX: rotateX,
            rotationY: rotateY,
            transformPerspective: 1000,
            duration: 0.1,
            ease: 'power1.out',
        });
        gsap.to(glare, {
            x: x - rect.width * 0.5,
            y: y - rect.height * 0.5,
            opacity: 0.4,
            duration: 0.1,
        });
    }

    onMouseLeave(index: number) {
        const gsap = this.gsapApi;
        if (!gsap) return;

        const card = this.cardRefs.get(index)?.nativeElement;
        const glare = this.glareRefs.get(index)?.nativeElement;
        if (card) gsap.to(card, { rotationX: 0, rotationY: 0, duration: 0.5, ease: 'elastic.out(1, 0.5)' });
        if (glare) gsap.to(glare, { opacity: 0, duration: 0.5 });
    }

    openCertificate(link: string) {
        if (!isPlatformBrowser(this.platformId)) return;
        if (link && link !== '#') {
            window.open(link, '_blank', 'noopener,noreferrer');
        }
    }
}
