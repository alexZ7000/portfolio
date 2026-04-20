import { Component, inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';
import { ThemeService } from '../../utils/functions/theme';

@Component({
    selector: 'app-language-switcher',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './language-switcher.html',
    styleUrl: './language-switcher.scss',
})
export class LanguageSwitcher {
    translate = inject(TranslateService);
    themeService = inject(ThemeService);
    platformId = inject(PLATFORM_ID);

    currentLang = 'en';

    constructor() {
        this.translate.addLangs(['en', 'pt']);
        this.translate.setDefaultLang('en');

        let savedLang = null;
        const browserLang = this.translate.getBrowserLang();

        if (isPlatformBrowser(this.platformId)) {
            savedLang = localStorage.getItem('language');
        }

        this.currentLang = savedLang || (browserLang?.match(/en|pt/) ? browserLang : 'en');
        this.translate.use(this.currentLang);
    }

    switchLanguage(lang: string) {
        this.translate.use(lang);
        this.currentLang = lang;

        if (isPlatformBrowser(this.platformId)) {
            localStorage.setItem('language', lang);
        }
    }
}
