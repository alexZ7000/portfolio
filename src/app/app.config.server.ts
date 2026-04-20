import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering, withRoutes } from '@angular/ssr';
import { appConfig } from './app.config';
import { serverRoutes } from './app.routes.server';
import { TranslateLoader } from '@ngx-translate/core';
import { Observable, of } from 'rxjs';
import * as fs from 'fs';
import * as path from 'path';

export class TranslateServerLoader implements TranslateLoader {
    getTranslation(lang: string): Observable<Record<string, string>> {
        const candidates = [
            path.join(process.cwd(), 'dist', 'portfolio', 'browser', 'assets', 'i18n', `${lang}.json`),
            path.join(process.cwd(), 'src', 'assets', 'i18n', `${lang}.json`),
        ];

        for (const filePath of candidates) {
            if (fs.existsSync(filePath)) {
                return of(JSON.parse(fs.readFileSync(filePath, 'utf8')));
            }
        }
        return of({});
    }
}

const serverConfig: ApplicationConfig = {
    providers: [
        provideServerRendering(withRoutes(serverRoutes)),
        {
            provide: TranslateLoader,
            useClass: TranslateServerLoader,
        },
    ],
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
