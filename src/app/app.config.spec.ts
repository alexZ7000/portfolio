import { TestBed } from '@angular/core/testing';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { describe, expect, it } from 'vitest';
import { CustomLoader, appConfig } from './app.config';

describe('appConfig', () => {
    it('exposes a non-empty providers array', () => {
        expect(Array.isArray(appConfig.providers)).toBe(true);
        expect(appConfig.providers.length).toBeGreaterThan(0);
    });
});

describe('CustomLoader', () => {
    function setup() {
        TestBed.configureTestingModule({
            providers: [provideHttpClient(), provideHttpClientTesting()],
        });
        const http = TestBed.inject(HttpClient);
        const ctrl = TestBed.inject(HttpTestingController);
        return { loader: new CustomLoader(http), ctrl };
    }

    it('returns the requested locale dictionary on success', async () => {
        const { loader, ctrl } = setup();
        const promise = new Promise<Record<string, string>>((resolve) =>
            loader.getTranslation('pt').subscribe(resolve),
        );
        const req = ctrl.expectOne('assets/i18n/pt.json');
        req.flush({ greeting: 'Olá' });
        await expect(promise).resolves.toEqual({ greeting: 'Olá' });
        ctrl.verify();
    });

    it('falls back to /portfolio/assets when the first request fails', async () => {
        const { loader, ctrl } = setup();
        const promise = new Promise<Record<string, string>>((resolve) =>
            loader.getTranslation('en').subscribe(resolve),
        );

        ctrl.expectOne('assets/i18n/en.json').error(new ProgressEvent('network'));
        const fallback = ctrl.expectOne('portfolio/assets/i18n/en.json');
        fallback.flush({ greeting: 'Hello' });

        await expect(promise).resolves.toEqual({ greeting: 'Hello' });
        ctrl.verify();
    });

    it('emits an empty dictionary when both requests fail', async () => {
        const { loader, ctrl } = setup();
        const promise = new Promise<Record<string, string>>((resolve) =>
            loader.getTranslation('jp').subscribe(resolve),
        );

        ctrl.expectOne('assets/i18n/jp.json').error(new ProgressEvent('network'));
        ctrl.expectOne('portfolio/assets/i18n/jp.json').error(new ProgressEvent('network'));

        await expect(promise).resolves.toEqual({});
        ctrl.verify();
    });
});
