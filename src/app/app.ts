import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './components/navbar/navbar';
import { ToasterContainer } from './components/toaster-container/toaster-container';
import { TranslateService } from '@ngx-translate/core';
import { CustomCursorComponent } from './components/custom-cursor/custom-cursor';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, Navbar, ToasterContainer, CustomCursorComponent],
    templateUrl: './app.html',
    styleUrl: './app.scss',
})
export class AppComponent {
    private translate = inject(TranslateService);

    constructor() {
        this.translate.addLangs(['en', 'pt']);
        this.translate.setDefaultLang('pt');
        this.translate.use('pt');
    }
}
