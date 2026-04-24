import {
    ChangeDetectionStrategy,
    Component,
    DestroyRef,
    HostListener,
    PLATFORM_ID,
    inject,
    signal,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { ThemeService } from '../../utils/functions/theme';
import { ScrollService } from '../../utils/functions/scroll.service';
import { LanguageSwitcher } from '../language-switcher/language-switcher';

@Component({
    selector: 'app-navbar',
    standalone: true,
    imports: [TranslateModule, LanguageSwitcher, FaIconComponent],
    templateUrl: './navbar.html',
    styleUrl: './navbar.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Navbar {
    readonly themeService = inject(ThemeService);
    private scroll = inject(ScrollService);
    private platformId = inject(PLATFORM_ID);
    private destroyRef = inject(DestroyRef);

    isScrolled = signal(false);
    isMobileMenuOpen = signal(false);

    private scrollFrame = 0;

    constructor() {
        if (isPlatformBrowser(this.platformId)) {
            this.destroyRef.onDestroy(() => cancelAnimationFrame(this.scrollFrame));
        }
    }

    @HostListener('window:scroll')
    onWindowScroll() {
        if (!isPlatformBrowser(this.platformId)) return;
        cancelAnimationFrame(this.scrollFrame);
        this.scrollFrame = requestAnimationFrame(() => {
            this.isScrolled.set(window.scrollY > 50);
        });
    }

    scrollTo(sectionId: string) {
        this.scroll.scrollTo(sectionId);
        this.isMobileMenuOpen.set(false);
    }

    toggleMobileMenu() {
        this.isMobileMenuOpen.update((v) => !v);
    }
}
