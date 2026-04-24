import { ChangeDetectionStrategy, Component, ViewChild, computed, inject } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { DragonAnimationComponent } from '../dragon-animation/dragon-animation';
import { ScrollService } from '../../utils/functions/scroll.service';
import { ThemeService } from '../../utils/functions/theme';

@Component({
    selector: 'app-hero',
    standalone: true,
    imports: [TranslateModule, DragonAnimationComponent, FaIconComponent],
    templateUrl: './hero.html',
    styleUrl: './hero.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Hero {
    @ViewChild(DragonAnimationComponent) dragon?: DragonAnimationComponent;

    private scroll = inject(ScrollService);
    private theme = inject(ThemeService);

    isDark = computed(() => this.theme.isDarkTheme());

    scrollToContact() {
        this.scroll.scrollTo('contact');
    }

    breatheFire() {
        this.dragon?.onDragonClick();
    }
}
