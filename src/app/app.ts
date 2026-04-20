import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './components/navbar/navbar';
import { ToasterContainer } from './components/toaster-container/toaster-container';
import { CustomCursorComponent } from './components/custom-cursor/custom-cursor';
import { PreloaderComponent } from './components/preloader/preloader';
import { StorageGateComponent } from './components/storage-gate/storage-gate';

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
export class AppComponent {}
