import { Injectable, signal } from '@angular/core';

export interface Toast {
    id: number;
    message: string;
    type: 'success' | 'error' | 'info';
}

@Injectable({
    providedIn: 'root',
})
export class ToasterService {
    toasts = signal<Toast[]>([]);
    private counter = 0;

    success(message: string) {
        this.add(message, 'success');
    }

    error(message: string) {
        this.add(message, 'error');
    }

    private add(message: string, type: 'success' | 'error' | 'info') {
        const id = this.counter++;
        this.toasts.update((current) => [...current, { id, message, type }]);

        // Remove automaticamente após 3 segundos
        setTimeout(() => this.remove(id), 3000);
    }

    remove(id: number) {
        this.toasts.update((current) => current.filter((t) => t.id !== id));
    }
}
