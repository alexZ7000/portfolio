import { Injectable, signal, effect, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
    providedIn: 'root',
})
export class ThemeService {
    private platformId = inject(PLATFORM_ID);

    isDarkTheme = signal<boolean>(true);

    constructor() {
        if (isPlatformBrowser(this.platformId)) {
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
            this.isDarkTheme.set(prefersDark.matches);

            this.updateBodyClass(prefersDark.matches);

            prefersDark.addEventListener('change', (e) => {
                const newStatus = e.matches;
                this.isDarkTheme.set(newStatus);
                this.updateBodyClass(newStatus);
            });
        }

        effect(() => {
            const isDark = this.isDarkTheme();
        });
    }

    private updateBodyClass(isDark: boolean) {
        if (isPlatformBrowser(this.platformId)) {
            const body = document.body;
            if (isDark) {
                body.classList.add('dark-theme');
                body.classList.remove('light-theme');
            } else {
                body.classList.add('light-theme');
                body.classList.remove('dark-theme');
            }
        }
    }
}
