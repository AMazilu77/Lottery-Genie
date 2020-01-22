import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PowerBallRulesComponent } from './power-ball-rules.component';

describe('PowerBallRulesComponent', () => {
  let component: PowerBallRulesComponent;
  let fixture: ComponentFixture<PowerBallRulesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PowerBallRulesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PowerBallRulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
