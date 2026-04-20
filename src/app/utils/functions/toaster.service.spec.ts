import { TestBed } from '@angular/core/testing';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { ToasterService } from './toaster.service';

describe('ToasterService', () => {
    let svc: ToasterService;

    beforeEach(() => {
        vi.useFakeTimers();
        TestBed.configureTestingModule({ providers: [ToasterService] });
        svc = TestBed.inject(ToasterService);
    });

    afterEach(() => {
        vi.useRealTimers();
    });

    it('starts with no toasts', () => {
        expect(svc.toasts()).toEqual([]);
    });

    it('emits a success toast with monotonically increasing ids', () => {
        svc.success('Saved');
        svc.success('Saved again');

        const toasts = svc.toasts();
        expect(toasts).toHaveLength(2);
        expect(toasts[0]).toMatchObject({ message: 'Saved', type: 'success' });
        expect(toasts[1]).toMatchObject({ message: 'Saved again', type: 'success' });
        expect(toasts[1].id).toBeGreaterThan(toasts[0].id);
    });

    it('emits the right type for error and info', () => {
        svc.error('Boom');
        svc.info('Heads up');
        const types = svc.toasts().map((t) => t.type);
        expect(types).toEqual(['error', 'info']);
    });

    it('auto-removes the toast after 3 seconds', () => {
        svc.success('Auto-bye');
        expect(svc.toasts()).toHaveLength(1);
        vi.advanceTimersByTime(2999);
        expect(svc.toasts()).toHaveLength(1);
        vi.advanceTimersByTime(1);
        expect(svc.toasts()).toHaveLength(0);
    });

    it('removes only the matching toast id', () => {
        svc.success('A');
        svc.success('B');
        const [a, b] = svc.toasts();

        svc.remove(a.id);
        expect(svc.toasts()).toEqual([b]);
    });

    it('is idempotent when removing a non-existent id', () => {
        svc.success('A');
        const before = svc.toasts();
        svc.remove(9999);
        expect(svc.toasts()).toEqual(before);
    });
});
