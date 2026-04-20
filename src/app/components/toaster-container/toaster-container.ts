import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { LucideAngularModule, CheckCircle, XCircle, Info } from 'lucide-angular';
import { ToasterService } from '../../utils/functions/toaster.service';

@Component({
    selector: 'app-toaster-container',
    standalone: true,
    imports: [LucideAngularModule],
    templateUrl: './toaster-container.html',
    styleUrl: './toaster-container.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToasterContainer {
    readonly toaster = inject(ToasterService);

    readonly icons = {
        success: CheckCircle,
        error: XCircle,
        info: Info,
    } as const;
}
