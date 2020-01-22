import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PowerBallGameTheoryComponent } from './power-ball-game-theory.component';

describe('PowerBallGameTheoryComponent', () => {
  let component: PowerBallGameTheoryComponent;
  let fixture: ComponentFixture<PowerBallGameTheoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PowerBallGameTheoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PowerBallGameTheoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
