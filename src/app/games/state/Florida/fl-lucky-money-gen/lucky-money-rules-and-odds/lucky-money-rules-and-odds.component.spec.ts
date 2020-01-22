import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LuckyMoneyRulesAndOddsComponent } from './lucky-money-rules-and-odds.component';

describe('LuckyMoneyRulesAndOddsComponent', () => {
  let component: LuckyMoneyRulesAndOddsComponent;
  let fixture: ComponentFixture<LuckyMoneyRulesAndOddsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LuckyMoneyRulesAndOddsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LuckyMoneyRulesAndOddsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
