import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

interface ContactInfo {
    icon: string;
    title: string;
    value: string;
    link: string;
    color: string;
}

@Component({
    selector: 'app-contact',
    standalone: true,
    imports: [TranslateModule],
    templateUrl: './contact.html',
    styleUrl: './contact.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactComponent {
    readonly contacts: readonly ContactInfo[] = [
        {
            icon: 'fa-brands fa-linkedin-in',
            title: 'LinkedIn',
            value: 'linkedin.com/in/alelimafilho',
            link: 'https://linkedin.com/in/alelimafilho',
            color: '#0077b5',
        },
        {
            icon: 'fa-brands fa-github',
            title: 'GitHub',
            value: 'github.com/alexZ7000',
            link: 'https://github.com/alexZ7000',
            color: '#ffffff',
        },
        {
            icon: 'fa-regular fa-envelope',
            title: 'Email',
            value: 'aledeveloper@pm.me',
            link: 'mailto:aledeveloper@pm.me',
            color: '#e34f26',
        },
        {
            icon: 'fa-brands fa-whatsapp',
            title: 'WhatsApp',
            value: '+55 (11) 95550-1739',
            link: 'https://wa.me/5511955501739',
            color: '#25d366',
        },
    ];
}
