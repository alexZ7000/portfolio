import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { DragonAnimationComponent } from '../dragon-animation/dragon-animation';

@Component({
    selector: 'app-hero',
    standalone: true,
    imports: [CommonModule, TranslateModule, DragonAnimationComponent],
    templateUrl: './hero.html',
    styleUrl: './hero.scss',
})
export class Hero {
    scrollToContact() {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    }
}
