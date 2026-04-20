import { Component, inject, signal, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { ThemeService } from '../../utils/functions/theme';
import { LanguageSwitcher } from '../language-switcher/language-switcher';

@Component({
    selector: 'app-navbar',
    standalone: true,
    imports: [CommonModule, TranslateModule, LanguageSwitcher],
    templateUrl: './navbar.html',
    styleUrl: './navbar.scss',
})
export class Navbar {
    themeService = inject(ThemeService);

    isScrolled = signal(false);
    isMobileMenuOpen = signal(false);

    @HostListener('window:scroll', [])
    onWindowScroll() {
        this.isScrolled.set(window.scrollY > 50);
    }

    scrollTo(sectionId: string) {
        const element = document.getElementById(sectionId);
        if (element) {
            const offset = 80;
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = element.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth',
            });
            this.isMobileMenuOpen.set(false);
        }
    }

    toggleMobileMenu() {
        this.isMobileMenuOpen.update((v) => !v);
    }
}
