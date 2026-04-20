import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ToasterService } from '../../utils/functions/toaster.service';

@Component({
    selector: 'app-toaster-container',
    standalone: true,
    templateUrl: './toaster-container.html',
    styleUrl: './toaster-container.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToasterContainer {
    readonly toaster = inject(ToasterService);
}
