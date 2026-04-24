import { registerIcons } from '../app/utils/icons/icon-library';

registerIcons();

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
