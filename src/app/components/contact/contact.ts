import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

interface ContactInfo {
    icon: IconProp;
    /** Rotulo literal (nomes de marca nao sao traduzidos). */
    title?: string;
    /** Rotulo traduzido — usado quando o titulo depende do idioma. */
    titleKey?: string;
    /** Valor literal exibido no cartao. */
    value?: string;
    /** Valor traduzido — usado quando o dado nao deve aparecer como texto. */
    valueKey?: string;
    link: string;
    color: string;
    /**
     * Mesma cor de `color` em canais RGB. `color-mix()` so existe a partir do
     * Chrome 111 / Safari 16.2; em navegadores mais antigos a declaracao inteira
     * e descartada e o cartao perde fundo e sombra. `rgba(var(--contact-rgb), a)`
     * funciona em qualquer engine que suporte custom properties.
     */
    rgb: string;
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
            icon: ['far', 'envelope'],
            titleKey: 'contactEmailPrimary',
            value: 'contato@alexZ7000.com.br',
            link: 'mailto:contato@alexZ7000.com.br',
            color: '#00f2a1',
            rgb: '0, 242, 161',
        },
        {
            icon: ['far', 'envelope'],
            titleKey: 'contactEmailAlt',
            value: 'aledeveloper@pm.me',
            link: 'mailto:aledeveloper@pm.me',
            color: '#e34f26',
            rgb: '227, 79, 38',
        },
        {
            icon: ['fab', 'linkedin-in'],
            title: 'LinkedIn',
            value: 'linkedin.com/in/alelimafilho',
            link: 'https://linkedin.com/in/alelimafilho',
            color: '#0077b5',
            rgb: '0, 119, 181',
        },
        {
            icon: ['fab', 'github'],
            title: 'GitHub',
            value: 'github.com/alexZ7000',
            link: 'https://github.com/alexZ7000',
            color: '#ffffff',
            rgb: '255, 255, 255',
        },
        {
            icon: ['fab', 'whatsapp'],
            title: 'WhatsApp',
            // O numero nunca aparece como texto: o link leva direto a conversa.
            valueKey: 'contactWhatsappAction',
            link: 'https://wa.me/5511955501739',
            color: '#25d366',
            rgb: '37, 211, 102',
        },
    ];
}
