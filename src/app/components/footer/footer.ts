import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { ScrollService } from '../../utils/functions/scroll.service';

interface SocialLink {
    icon: IconProp;
    url: string;
    label: string;
}

@Component({
    selector: 'app-footer',
    standalone: true,
    imports: [TranslateModule, FaIconComponent],
    templateUrl: './footer.html',
    styleUrl: './footer.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
    private scroll = inject(ScrollService);

    readonly socials: readonly SocialLink[] = [
        {
            icon: ['fab', 'linkedin-in'],
            url: 'https://linkedin.com/in/alelimafilho',
            label: 'LinkedIn',
        },
        { icon: ['fab', 'github'], url: 'https://github.com/alexZ7000', label: 'GitHub' },
        { icon: ['fab', 'whatsapp'], url: 'https://wa.me/5511955501739', label: 'WhatsApp' },
    ];

    scrollToTop() {
        this.scroll.scrollToTop();
    }
}
