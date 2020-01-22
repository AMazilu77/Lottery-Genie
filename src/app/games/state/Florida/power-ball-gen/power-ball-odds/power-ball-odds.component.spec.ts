import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PowerBallOddsComponent } from './power-ball-odds.component';

describe('PowerBallOddsComponent', () => {
  let component: PowerBallOddsComponent;
  let fixture: ComponentFixture<PowerBallOddsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PowerBallOddsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PowerBallOddsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
