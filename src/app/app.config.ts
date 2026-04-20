import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { HttpClient, provideHttpClient, withFetch } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { Observable, catchError, of } from 'rxjs';

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
            withInMemoryScrolling({ anchorScrolling: 'enabled', scrollPositionRestoration: 'enabled' }),
        ),
        provideClientHydration(),
        provideHttpClient(withFetch()),
        importProvidersFrom(
            TranslateModule.forRoot({
                loader: {
                    provide: TranslateLoader,
                    useClass: CustomLoader,
                    deps: [HttpClient],
                },
            }),
        ),
    ],
};
