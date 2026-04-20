import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToasterService } from '../../utils/functions/toaster.service';
import { LucideAngularModule, CheckCircle, XCircle, Info } from 'lucide-angular';

@Component({
    selector: 'app-toaster-container',
    standalone: true,
    imports: [CommonModule, LucideAngularModule],
    templateUrl: './toaster-container.html',
    styleUrl: './toaster-container.scss',
})
export class ToasterContainer {
    toaster = inject(ToasterService);

    readonly CheckIcon = CheckCircle;
    readonly ErrorIcon = XCircle;
    readonly InfoIcon = Info;
}
