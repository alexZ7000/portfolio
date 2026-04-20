import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { DragonAnimationComponent } from '../dragon-animation/dragon-animation';
import { ScrollService } from '../../utils/functions/scroll.service';

@Component({
    selector: 'app-hero',
    standalone: true,
    imports: [TranslateModule, DragonAnimationComponent],
    templateUrl: './hero.html',
    styleUrl: './hero.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Hero {
    private scroll = inject(ScrollService);

    scrollToContact() {
        this.scroll.scrollTo('contact');
    }
}
