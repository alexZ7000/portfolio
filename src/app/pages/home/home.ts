import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Hero } from '../../components/hero/hero';
import { AboutMe } from '../../components/about-me/about-me';
import { WorkExperience } from '../../components/work-experience/work-experience';
import { CertificatesComponent } from '../../components/certificates/certificates';
import { ContactComponent } from '../../components/contact/contact';
import { FooterComponent } from '../../components/footer/footer';
import { EmbersBackgroundComponent } from '../../components/embers-background/embers-background';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [
        Hero,
        AboutMe,
        WorkExperience,
        CertificatesComponent,
        ContactComponent,
        FooterComponent,
        EmbersBackgroundComponent,
    ],
    templateUrl: './home.html',
    styleUrl: './home.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Home {}
