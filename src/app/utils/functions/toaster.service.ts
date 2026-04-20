import { Injectable, signal } from '@angular/core';

export type ToastType = 'success' | 'error' | 'info';

export interface Toast {
    id: number;
    message: string;
    type: ToastType;
}

@Injectable({ providedIn: 'root' })
export class ToasterService {
    readonly toasts = signal<Toast[]>([]);
    private counter = 0;

    success(message: string) {
        this.add(message, 'success');
    }

    error(message: string) {
        this.add(message, 'error');
    }

    info(message: string) {
        this.add(message, 'info');
    }

    remove(id: number) {
        this.toasts.update((current) => current.filter((t) => t.id !== id));
    }

    private add(message: string, type: ToastType) {
        const id = this.counter++;
        this.toasts.update((current) => [...current, { id, message, type }]);
        setTimeout(() => this.remove(id), 3000);
    }
}
