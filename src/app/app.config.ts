import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { HttpClient, provideHttpClient, withFetch } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { Observable, catchError, of, tap } from 'rxjs';

// --- CLASSE DO LOADER EXPLÍCITO ---
// Isso substitui o TranslateHttpLoader e nos dá controle total
export class CustomLoader implements TranslateLoader {
    constructor(private http: HttpClient) {}

    getTranslation(lang: string): Observable<any> {
        // 1. Tenta o caminho padrão (relativo à base)
        const path = `assets/i18n/${lang}.json`;
        console.log(`[Translate] Tentando carregar: ${path}`);

        return this.http.get(path).pipe(
            tap(() => console.log(`[Translate] Sucesso carregando: ${path}`)),
            catchError(() => {
                // 2. Se falhar, tenta o caminho com o prefixo do projeto (Fallback)
                const fallbackPath = `portfolio/assets/i18n/${lang}.json`;
                console.warn(`[Translate] Falha em ${path}. Tentando fallback: ${fallbackPath}`);
                return this.http.get(fallbackPath);
            }),
            catchError((err) => {
                console.error(
                    '[Translate] ERRO CRÍTICO: Não foi possível carregar tradução em nenhum caminho.',
                    err,
                );
                return of({}); // Retorna objeto vazio para não quebrar a app
            }),
        );
    }
}

export const appConfig: ApplicationConfig = {
    providers: [
        provideRouter(routes),
        provideClientHydration(),
        provideHttpClient(withFetch()),

        // Configuração do Módulo usando nossa classe CustomLoader
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
