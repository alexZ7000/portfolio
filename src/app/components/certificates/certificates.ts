import {
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
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { RevealOnScrollDirective } from '../../utils/directives/reveal-on-scroll';
import { DeviceCapabilityService } from '../../utils/functions/device-capability';

interface Certificate {
    name: string;
    issuer: string;
    date: string;
    link: string;
}

@Component({
    selector: 'app-certificates',
    standalone: true,
    imports: [TranslateModule, RevealOnScrollDirective, FaIconComponent],
    templateUrl: './certificates.html',
    styleUrl: './certificates.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CertificatesComponent {
    @ViewChildren('cardRef') cardRefs!: QueryList<ElementRef<HTMLElement>>;
    @ViewChildren('glareRef') glareRefs!: QueryList<ElementRef<HTMLElement>>;

    private platformId = inject(PLATFORM_ID);
    private destroyRef = inject(DestroyRef);
    private capability = inject(DeviceCapabilityService);

    // Estado do tilt. O hover 3D antes criava dois tweens GSAP por `mousemove` e
    // chamava getBoundingClientRect a cada evento — com cinco cartoes em tela e o
    // mouse emitindo mais eventos do que frames, essa secao era a mais pesada da
    // pagina em navegadores antigos. Agora o retangulo e medido uma vez por
    // entrada no cartao e o transform e escrito uma vez por frame.
    private activeIndex = -1;
    private activeRect: DOMRect | null = null;
    private pointerX = 0;
    private pointerY = 0;
    private rafId = 0;

    readonly certificates: readonly Certificate[] = [
        {
            name: 'AWS Generative AI Foundations',
            issuer: 'Amazon Web Services',
            date: '2026',
            link: '#',
        },
        {
            name: 'AWS Cloud Foundations',
            issuer: 'Amazon Web Services',
            date: '2024',
            link: '#',
        },
        {
            name: 'Introdução ao Arduino',
            issuer: 'Instituto Mauá de Tecnologia',
            date: '2024',
            link: '#',
        },
        {
            name: 'Programação Funcional com Clojure',
            issuer: 'Instituto Mauá de Tecnologia',
            date: '2024',
            link: '#',
        },
        {
            name: 'Desafios de Cibersegurança',
            issuer: 'Instituto Mauá de Tecnologia',
            date: '2024',
            link: '#',
        },
    ];

    constructor() {
        this.destroyRef.onDestroy(() => {
            if (this.rafId) cancelAnimationFrame(this.rafId);
            this.rafId = 0;
        });
    }

    onMouseEnter(index: number) {
        if (!this.tiltAllowed()) return;
        const card = this.cardRefs.get(index)?.nativeElement;
        if (!card) return;

        const rect = card.getBoundingClientRect();
        // Cartao sem area medida (ainda fora do layout, ou escondido) dividiria
        // por zero no calculo do angulo e produziria `rotateX(Infinitydeg)`.
        if (rect.width <= 0 || rect.height <= 0) return;

        this.activeIndex = index;
        this.activeRect = rect;
        card.classList.add('is-tilting');
    }

    onMouseMove(e: MouseEvent, index: number) {
        if (this.activeIndex !== index) {
            // Sem `mouseenter` (ponteiro ja estava sobre o cartao quando a secao
            // renderizou): mede agora e segue.
            this.onMouseEnter(index);
            if (this.activeIndex !== index) return;
        }
        this.pointerX = e.clientX;
        this.pointerY = e.clientY;
        if (this.rafId) return;
        this.rafId = requestAnimationFrame(this.applyTilt);
    }

    onMouseLeave(index: number) {
        if (this.activeIndex !== index) return;
        this.activeIndex = -1;
        this.activeRect = null;

        const card = this.cardRefs.get(index)?.nativeElement;
        const glare = this.glareRefs.get(index)?.nativeElement;
        // A volta ao repouso e uma transicao CSS (ver certificates.scss): o
        // compositor cuida dela sozinho, sem manter uma engine de animacao viva.
        if (card) {
            card.classList.remove('is-tilting');
            card.style.transform = '';
        }
        if (glare) glare.style.opacity = '0';
    }

    private applyTilt = () => {
        this.rafId = 0;

        const index = this.activeIndex;
        const rect = this.activeRect;
        if (index < 0 || !rect) return;
        if (!this.tiltAllowed()) {
            this.onMouseLeave(index);
            return;
        }

        const card = this.cardRefs.get(index)?.nativeElement;
        const glare = this.glareRefs.get(index)?.nativeElement;
        if (!card) return;

        const x = this.pointerX - rect.left;
        const y = this.pointerY - rect.top;
        const rotateX = ((y - rect.height / 2) / (rect.height / 2)) * -10;
        const rotateY = ((x - rect.width / 2) / (rect.width / 2)) * 10;

        card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg)`;

        if (glare) {
            glare.style.transform = `translate3d(${(x - rect.width * 0.5).toFixed(1)}px, ${(y - rect.height * 0.5).toFixed(1)}px, 0)`;
            glare.style.opacity = '0.4';
        }
    };

    /**
     * Reavaliado a cada evento em vez de so na inicializacao: a sondagem de frame
     * rate pode rebaixar a maquina depois que a secao ja montou.
     */
    private tiltAllowed(): boolean {
        return isPlatformBrowser(this.platformId) && this.capability.allowsPointerEffects();
    }

    openCertificate(link: string) {
        if (!isPlatformBrowser(this.platformId)) return;
        if (link && link !== '#') {
            window.open(link, '_blank', 'noopener,noreferrer');
        }
    }
}
