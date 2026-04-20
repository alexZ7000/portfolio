import { Injectable, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({ providedIn: 'root' })
export class ScrollService {
    private platformId = inject(PLATFORM_ID);
    private readonly navbarOffset = 80;

    scrollTo(sectionId: string) {
        if (!isPlatformBrowser(this.platformId)) return;
        const element = document.getElementById(sectionId);
        if (!element) return;
        const top =
            element.getBoundingClientRect().top + window.scrollY - this.navbarOffset;
        window.scrollTo({ top, behavior: 'smooth' });
    }

    scrollToTop() {
        if (!isPlatformBrowser(this.platformId)) return;
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}
