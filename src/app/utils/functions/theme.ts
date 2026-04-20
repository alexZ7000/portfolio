import { DestroyRef, Injectable, inject, PLATFORM_ID, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({ providedIn: 'root' })
export class ThemeService {
    private platformId = inject(PLATFORM_ID);
    private destroyRef = inject(DestroyRef);

    isDarkTheme = signal<boolean>(true);

    constructor() {
        if (!isPlatformBrowser(this.platformId)) return;

        const media = window.matchMedia('(prefers-color-scheme: dark)');
        this.setTheme(media.matches);

        const onChange = (e: MediaQueryListEvent) => this.setTheme(e.matches);
        media.addEventListener('change', onChange);
        this.destroyRef.onDestroy(() => media.removeEventListener('change', onChange));
    }

    toggle() {
        this.setTheme(!this.isDarkTheme());
    }

    private setTheme(isDark: boolean) {
        this.isDarkTheme.set(isDark);
        const { classList } = document.body;
        classList.toggle('dark-theme', isDark);
        classList.toggle('light-theme', !isDark);
    }
}
