import { registerIcons } from '../app/utils/icons/icon-library';

registerIcons();

// Node 22+ exposes `localStorage` on `globalThis` as part of the Web Storage API, but it stays
// inert unless the process is started with `--localstorage-file`. Vitest's jsdom environment only
// copies a window key onto the global when that key is absent from the Node global *or* present in
// its own allowlist (`getWindowKeys`), and `localStorage` is neither — so jsdom's perfectly good
// implementation never reaches the tests and `localStorage` resolves to Node's inert one.
// `sessionStorage` is unaffected because Node's in-memory version works without any flag.
if (typeof globalThis.localStorage === 'undefined') {
    const store = new Map<string, string>();
    const localStorageStub: Storage = {
        get length() {
            return store.size;
        },
        key: (index: number) => [...store.keys()][index] ?? null,
        getItem: (key: string) => store.get(String(key)) ?? null,
        setItem: (key: string, value: string) => void store.set(String(key), String(value)),
        removeItem: (key: string) => void store.delete(String(key)),
        clear: () => store.clear(),
    };

    // Configurable so specs can swap in a throwing stub to exercise blocked-storage paths and
    // restore the original descriptor afterwards.
    Object.defineProperty(globalThis, 'localStorage', {
        configurable: true,
        writable: true,
        value: localStorageStub,
    });
}

if (typeof window !== 'undefined' && typeof window.matchMedia !== 'function') {
    Object.defineProperty(window, 'matchMedia', {
        configurable: true,
        writable: true,
        value: (query: string): MediaQueryList =>
            ({
                media: query,
                matches: false,
                onchange: null,
                addEventListener: () => {},
                removeEventListener: () => {},
                addListener: () => {},
                removeListener: () => {},
                dispatchEvent: () => false,
            }) as MediaQueryList,
    });
}

if (typeof window !== 'undefined' && typeof window.requestAnimationFrame !== 'function') {
    window.requestAnimationFrame = ((cb: FrameRequestCallback) =>
        setTimeout(
            () => cb(performance.now()),
            16,
        ) as unknown as number) as typeof window.requestAnimationFrame;
    window.cancelAnimationFrame = ((id: number) =>
        clearTimeout(id)) as typeof window.cancelAnimationFrame;
}

if (typeof globalThis.IntersectionObserver === 'undefined') {
    class IntersectionObserverStub implements IntersectionObserver {
        readonly root: Element | Document | null = null;
        readonly rootMargin: string = '';
        readonly thresholds: ReadonlyArray<number> = [];
        observe(): void {}
        unobserve(): void {}
        disconnect(): void {}
        takeRecords(): IntersectionObserverEntry[] {
            return [];
        }
    }
    (
        globalThis as unknown as { IntersectionObserver: typeof IntersectionObserver }
    ).IntersectionObserver = IntersectionObserverStub as unknown as typeof IntersectionObserver;
}
