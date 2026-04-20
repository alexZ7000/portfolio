import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DragonAnimation } from './dragon-animation';

describe('DragonAnimation', () => {
    let component: DragonAnimation;
    let fixture: ComponentFixture<DragonAnimation>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [DragonAnimation],
        }).compileComponents();

        fixture = TestBed.createComponent(DragonAnimation);
        component = fixture.componentInstance;
        await fixture.whenStable();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
