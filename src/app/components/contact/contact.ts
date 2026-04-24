import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

interface ContactInfo {
    icon: IconProp;
    title: string;
    value: string;
    link: string;
    color: string;
}

@Component({
    selector: 'app-contact',
    standalone: true,
    imports: [TranslateModule, FaIconComponent],
    templateUrl: './contact.html',
    styleUrl: './contact.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactComponent {
    readonly contacts: readonly ContactInfo[] = [
        {
            icon: ['fab', 'linkedin-in'],
            title: 'LinkedIn',
            value: 'linkedin.com/in/alelimafilho',
            link: 'https://linkedin.com/in/alelimafilho',
            color: '#0077b5',
        },
        {
            icon: ['fab', 'github'],
            title: 'GitHub',
            value: 'github.com/alexZ7000',
            link: 'https://github.com/alexZ7000',
            color: '#ffffff',
        },
        {
            icon: ['far', 'envelope'],
            title: 'Email',
            value: 'aledeveloper@pm.me',
            link: 'mailto:aledeveloper@pm.me',
            color: '#e34f26',
        },
        {
            icon: ['fab', 'whatsapp'],
            title: 'WhatsApp',
            value: '+55 (11) 95550-1739',
            link: 'https://wa.me/5511955501739',
            color: '#25d366',
        },
    ];
}
