import {
    ChangeDetectionStrategy,
    Component,
    OnInit,
    PLATFORM_ID,
    inject,
    signal,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
    selector: 'app-storage-gate',
    standalone: true,
    templateUrl: './storage-gate.html',
    styleUrl: './storage-gate.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StorageGateComponent implements OnInit {
    private platformId = inject(PLATFORM_ID);

    readonly blocked = signal(false);

    ngOnInit() {
        if (!isPlatformBrowser(this.platformId)) return;
        this.blocked.set(!StorageGateComponent.isStorageAvailable());
    }

    retry() {
        if (!isPlatformBrowser(this.platformId)) return;
        if (StorageGateComponent.isStorageAvailable()) {
            this.blocked.set(false);
            window.location.reload();
        }
    }

    private static isStorageAvailable(): boolean {
        try {
            if (!('localStorage' in window)) return false;
            const key = '__storage_gate_probe__';
            window.localStorage.setItem(key, '1');
            window.localStorage.removeItem(key);
            return navigator.cookieEnabled !== false;
        } catch {
            return false;
        }
    }
}
