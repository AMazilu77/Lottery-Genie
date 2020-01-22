import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PowerBallRulesAndOddsComponent } from './power-ball-rules-and-odds.component';

describe('PowerBallRulesAndOddsComponent', () => {
  let component: PowerBallRulesAndOddsComponent;
  let fixture: ComponentFixture<PowerBallRulesAndOddsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PowerBallRulesAndOddsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PowerBallRulesAndOddsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
