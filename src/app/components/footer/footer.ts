import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ScrollService } from '../../utils/functions/scroll.service';

interface SocialLink {
    icon: string;
    url: string;
    label: string;
}

@Component({
    selector: 'app-footer',
    standalone: true,
    imports: [TranslateModule],
    templateUrl: './footer.html',
    styleUrl: './footer.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
    private scroll = inject(ScrollService);

    readonly socials: readonly SocialLink[] = [
        { icon: 'fa-brands fa-linkedin-in', url: 'https://linkedin.com/in/alelimafilho', label: 'LinkedIn' },
        { icon: 'fa-brands fa-github', url: 'https://github.com/alexZ7000', label: 'GitHub' },
        { icon: 'fa-brands fa-whatsapp', url: 'https://wa.me/5511955501739', label: 'WhatsApp' },
    ];

    scrollToTop() {
        this.scroll.scrollToTop();
    }
}
