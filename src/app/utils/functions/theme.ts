import { Injectable, inject, PLATFORM_ID, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({ providedIn: 'root' })
export class ThemeService {
    private platformId = inject(PLATFORM_ID);

    isDarkTheme = signal<boolean>(true);

    constructor() {
        if (!isPlatformBrowser(this.platformId)) return;
        this.setTheme(true);
    }

    toggle() {
        this.setTheme(!this.isDarkTheme());
    }

    private setTheme(isDark: boolean) {
        this.isDarkTheme.set(isDark);
        const { classList } = document.body;
        classList.toggle('dark-theme', isDark);
        classList.toggle('light-theme', !isDark);

        const favicon = document.getElementById('favicon') as HTMLLinkElement | null;
        if (favicon) favicon.href = isDark ? 'dragonWhite.svg' : 'dragonBlack.svg';
    }
}
