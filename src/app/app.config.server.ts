import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering, withRoutes } from '@angular/ssr';
import { appConfig } from './app.config';
import { serverRoutes } from './app.routes.server';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { Observable, of } from 'rxjs';
import * as fs from 'fs';
import * as path from 'path';

export class TranslateServerLoader implements TranslateLoader {
    getTranslation(lang: string): Observable<any> {
        const possiblePaths = [
            path.join(
                process.cwd(),
                'dist',
                'portfolio',
                'browser',
                'assets',
                'i18n',
                `${lang}.json`,
            ),
            path.join(process.cwd(), 'src', 'assets', 'i18n', `${lang}.json`),
        ];

        for (const filePath of possiblePaths) {
            if (fs.existsSync(filePath)) {
                const jsonData = JSON.parse(fs.readFileSync(filePath, 'utf8'));
                return of(jsonData);
            }
        }

        console.warn(`Translation file not found for language: ${lang}`);
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
