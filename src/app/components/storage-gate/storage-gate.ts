import {
    ChangeDetectionStrategy,
    Component,
    PLATFORM_ID,
    computed,
    inject,
    signal,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { StorageAvailabilityService } from './storage-availability.service';

type Locale = 'pt' | 'en';

interface GateCopy {
    title: string;
    body: string;
    retry: string;
}

const COPY: Record<Locale, GateCopy> = {
    pt: {
        title: 'Cookies e armazenamento necessários',
        body: 'Este portfólio precisa do armazenamento do navegador (cookies e localStorage) para funcionar. Habilite cookies e dados do site nas configurações do seu navegador e clique em tentar novamente.',
        retry: 'Tentar novamente',
    },
    en: {
        title: 'Cookies & storage required',
        body: 'This portfolio needs browser storage (cookies and localStorage) to run. Please enable cookies and site data in your browser settings, then retry.',
        retry: 'Retry',
    },
};

@Component({
    selector: 'app-storage-gate',
    standalone: true,
    imports: [FaIconComponent],
    templateUrl: './storage-gate.html',
    styleUrl: './storage-gate.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StorageGateComponent {
    private platformId = inject(PLATFORM_ID);
    private availability = inject(StorageAvailabilityService);

    readonly blocked = computed(() => !this.availability.available());
    readonly locale = signal<Locale>(this.detectLocale());
    readonly copy = computed<GateCopy>(() => COPY[this.locale()]);

    retry() {
        if (!isPlatformBrowser(this.platformId)) return;
        // Sempre recarrega. Se o usuário habilitou cookies, o app sobe normal.
        // Se continua bloqueado, a gate reaparece após o reload.
        this.availability.recheck();
        window.location.reload();
    }

    private detectLocale(): Locale {
        if (!isPlatformBrowser(this.platformId)) return 'en';
        try {
            const lang = (navigator.language || 'en').toLowerCase();
            return lang.startsWith('pt') ? 'pt' : 'en';
        } catch {
            return 'en';
        }
    }
}
