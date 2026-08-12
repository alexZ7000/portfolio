import { ChangeDetectionStrategy, Component, PLATFORM_ID, computed, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './components/navbar/navbar';
import { ToasterContainer } from './components/toaster-container/toaster-container';
import { CustomCursorComponent } from './components/custom-cursor/custom-cursor';
import { PreloaderComponent } from './components/preloader/preloader';
import { StorageGateComponent } from './components/storage-gate/storage-gate';
import { StorageAvailabilityService } from './components/storage-gate/storage-availability.service';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [
        RouterOutlet,
        Navbar,
        ToasterContainer,
        CustomCursorComponent,
        PreloaderComponent,
        StorageGateComponent,
    ],
    templateUrl: './app.html',
    styleUrl: './app.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
    private availability = inject(StorageAvailabilityService);
    private platformId = inject(PLATFORM_ID);
    readonly storageAvailable = computed(() => this.availability.available());

    constructor() {
        if (!isPlatformBrowser(this.platformId)) return;
        try {
            document.documentElement.setAttribute('data-app-booted', '1');
        } catch {
            void 0;
        }
    }
}
