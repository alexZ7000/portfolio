import {
    ApplicationConfig,
    inject,
    provideAppInitializer,
} from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration, withNoIncrementalHydration } from '@angular/platform-browser';
import { HttpClient, provideHttpClient, withFetch } from '@angular/common/http';
import { TranslateLoader, provideTranslateService } from '@ngx-translate/core';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { Observable, catchError, of } from 'rxjs';
import { registerIcons } from './utils/icons/icon-library';

export class CustomLoader implements TranslateLoader {
    constructor(private http: HttpClient) {}

    getTranslation(lang: string): Observable<Record<string, string>> {
        return this.http.get<Record<string, string>>(`assets/i18n/${lang}.json`).pipe(
            catchError(() =>
                this.http.get<Record<string, string>>(`portfolio/assets/i18n/${lang}.json`),
            ),
            catchError(() => of({})),
        );
    }
}

export const appConfig: ApplicationConfig = {
    providers: [
        provideRouter(
            routes,
            withInMemoryScrolling({
                anchorScrolling: 'enabled',
                scrollPositionRestoration: 'enabled',
            }),
        ),
        provideClientHydration(withNoIncrementalHydration()),
        provideHttpClient(withFetch()),
        provideAppInitializer(() => registerIcons(inject(FaIconLibrary))),
        provideTranslateService({
            loader: {
                provide: TranslateLoader,
                useClass: CustomLoader,
                deps: [HttpClient],
            },
        }),
    ],
};
