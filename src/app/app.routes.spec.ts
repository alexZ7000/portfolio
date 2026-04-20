import { describe, expect, it } from 'vitest';
import { routes } from './app.routes';

describe('app.routes', () => {
    it('declares a root route and a wildcard fallback', () => {
        const paths = routes.map((r) => r.path);
        expect(paths).toEqual(['', '**']);
    });

    it('lazily loads the Home page on the root route', async () => {
        const root = routes.find((r) => r.path === '');
        expect(root?.loadComponent).toBeDefined();

        const loaded = (await root!.loadComponent!()) as
            | { name: string }
            | { default: { name: string } };
        const ctor = 'default' in loaded ? loaded.default : loaded;
        expect(ctor.name).toMatch(/Home$/);
    });

    it('redirects unknown URLs back to the root', () => {
        const wildcard = routes.find((r) => r.path === '**');
        expect(wildcard?.redirectTo).toBe('');
    });
});
