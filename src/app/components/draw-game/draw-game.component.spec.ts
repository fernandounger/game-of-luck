import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrawGameComponent } from './draw-game.component';

describe('DrawGameComponent', () => {
  let component: DrawGameComponent;
  let fixture: ComponentFixture<DrawGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrawGameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DrawGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
