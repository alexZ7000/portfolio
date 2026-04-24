import {
    EnvironmentProviders,
    Provider,
    inject,
    provideAppInitializer,
    signal,
} from '@angular/core';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideRouter } from '@angular/router';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { Observable, of } from 'rxjs';
import { vi } from 'vitest';
import { DeviceCapabilityService } from '../app/utils/functions/device-capability';
import { registerIcons } from '../app/utils/icons/icon-library';

export type TestingProvider = Provider | EnvironmentProviders;

export class FakeTranslateLoader implements TranslateLoader {
    constructor(private dictionary: Record<string, Record<string, string>> = {}) {}

    getTranslation(lang: string): Observable<Record<string, string>> {
        return of(this.dictionary[lang] ?? {});
    }
}

export function provideTesting(extra: TestingProvider[] = []): TestingProvider[] {
    return [
        provideHttpClient(withFetch()),
        provideHttpClientTesting(),
        provideRouter([]),
        provideAppInitializer(() => registerIcons(inject(FaIconLibrary))),
        ...(TranslateModule.forRoot({
            loader: { provide: TranslateLoader, useClass: FakeTranslateLoader },
        }).providers ?? []),
        ...extra,
    ];
}

type RequestInfo = string | URL | Request;

export interface FetchMock {
    mock: ReturnType<typeof vi.fn>;
    restore: () => void;
}

export function mockFetch(
    handler: (input: RequestInfo) => Promise<Partial<Response>> | Partial<Response>,
): FetchMock {
    const original = globalThis.fetch;
    const mock = vi.fn(async (input: RequestInfo) => {
        const result = await handler(input);
        return new Response(result.body ?? '', {
            status: result.status ?? 200,
            statusText: result.statusText ?? 'OK',
            headers: result.headers as HeadersInit | undefined,
        });
    });
    globalThis.fetch = mock as unknown as typeof fetch;
    return {
        mock,
        restore: () => {
            globalThis.fetch = original;
        },
    };
}

export interface MatchMediaMock {
    setMatches: (matches: boolean) => void;
    listeners: Set<(e: MediaQueryListEvent) => void>;
    restore: () => void;
}

export function mockMatchMedia(initialMatches = false): MatchMediaMock {
    const original = window.matchMedia;
    const listeners = new Set<(e: MediaQueryListEvent) => void>();
    let currentMatches = initialMatches;

    const factory = (query: string): MediaQueryList => {
        const mql: Partial<MediaQueryList> = {
            media: query,
            onchange: null,
            addEventListener: ((_: string, cb: (e: MediaQueryListEvent) => void) => {
                listeners.add(cb);
            }) as MediaQueryList['addEventListener'],
            removeEventListener: ((_: string, cb: (e: MediaQueryListEvent) => void) => {
                listeners.delete(cb);
            }) as MediaQueryList['removeEventListener'],
            addListener: () => {},
            removeListener: () => {},
            dispatchEvent: () => true,
        };
        Object.defineProperty(mql, 'matches', { get: () => currentMatches });
        return mql as MediaQueryList;
    };

    Object.defineProperty(window, 'matchMedia', {
        configurable: true,
        writable: true,
        value: factory,
    });

    return {
        setMatches(value: boolean) {
            currentMatches = value;
            const event = { matches: value } as MediaQueryListEvent;
            listeners.forEach((cb) => cb(event));
        },
        listeners,
        restore() {
            Object.defineProperty(window, 'matchMedia', {
                configurable: true,
                writable: true,
                value: original,
            });
        },
    };
}

export function makeGsapMock() {
    const calls: { method: string; args: unknown[] }[] = [];
    const record = (method: string, ...args: unknown[]) => calls.push({ method, args });

    const timelineApi = {
        to: vi.fn().mockImplementation(function (this: unknown) {
            return this;
        }),
        from: vi.fn().mockImplementation(function (this: unknown) {
            return this;
        }),
        fromTo: vi.fn().mockImplementation(function (this: unknown) {
            return this;
        }),
        set: vi.fn().mockImplementation(function (this: unknown) {
            return this;
        }),
        kill: vi.fn(),
    };

    const ctxApi = {
        revert: vi.fn(),
    };

    const gsap = {
        registerPlugin: vi.fn((..._args: unknown[]) => record('registerPlugin', ..._args)),
        context: vi.fn((cb: () => void) => {
            cb();
            return ctxApi;
        }),
        set: vi.fn((..._args: unknown[]) => record('set', ..._args)),
        to: vi.fn((..._args: unknown[]) => {
            record('to', ..._args);
            return timelineApi;
        }),
        from: vi.fn((..._args: unknown[]) => {
            record('from', ..._args);
            return timelineApi;
        }),
        fromTo: vi.fn((..._args: unknown[]) => {
            record('fromTo', ..._args);
            return timelineApi;
        }),
        timeline: vi.fn((opts?: { onComplete?: () => void }) => {
            const tl = { ...timelineApi };
            if (opts?.onComplete) {
                queueMicrotask(opts.onComplete);
            }
            return tl;
        }),
    };

    return { gsap, timelineApi, ctxApi, calls };
}

export async function flushMicrotasks() {
    await Promise.resolve();
    await Promise.resolve();
}

export interface DeviceCapabilityMockOptions {
    prefersReducedMotion?: boolean;
    isLowEnd?: boolean;
    isTouch?: boolean;
}

export function provideDeviceCapabilityMock(opts: DeviceCapabilityMockOptions = {}): Provider {
    const reduced = signal(opts.prefersReducedMotion ?? false);
    const lowEnd = signal(opts.isLowEnd ?? false);
    const touch = signal(opts.isTouch ?? false);
    return {
        provide: DeviceCapabilityService,
        useValue: {
            prefersReducedMotion: reduced.asReadonly(),
            isLowEnd: lowEnd.asReadonly(),
            isTouch: touch.asReadonly(),
            shouldReduceEffects: () => reduced() || lowEnd(),
        },
    };
}
