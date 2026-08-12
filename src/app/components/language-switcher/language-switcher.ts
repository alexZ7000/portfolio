import { ChangeDetectionStrategy, Component, inject, PLATFORM_ID, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';

type Lang = 'pt' | 'en';
const SUPPORTED: Lang[] = ['pt', 'en'];
const STORAGE_KEY = 'language';

@Component({
    selector: 'app-language-switcher',
    standalone: true,
    templateUrl: './language-switcher.html',
    styleUrl: './language-switcher.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LanguageSwitcher {
    private translate = inject(TranslateService);
    private platformId = inject(PLATFORM_ID);

    currentLang = signal<Lang>('pt');

    constructor() {
        this.translate.addLangs(SUPPORTED);
        this.translate.setDefaultLang('pt');

        const initial = this.resolveInitialLang();
        this.currentLang.set(initial);
        this.translate.use(initial);
    }

    switchLanguage(lang: Lang) {
        if (this.currentLang() === lang) return;
        this.currentLang.set(lang);
        this.translate.use(lang);
        if (isPlatformBrowser(this.platformId)) {
            try {
                localStorage.setItem(STORAGE_KEY, lang);
            } catch {}
        }
    }

    private resolveInitialLang(): Lang {
        if (isPlatformBrowser(this.platformId)) {
            try {
                const saved = localStorage.getItem(STORAGE_KEY) as Lang | null;
                if (saved && SUPPORTED.includes(saved)) return saved;
            } catch {}
        }
        const browser = this.translate.getBrowserLang();
        return browser && SUPPORTED.includes(browser as Lang) ? (browser as Lang) : 'pt';
    }
}
