import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LuckyMoneyRulesComponent } from './lucky-money-rules.component';

describe('LuckyMoneyRulesComponent', () => {
  let component: LuckyMoneyRulesComponent;
  let fixture: ComponentFixture<LuckyMoneyRulesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LuckyMoneyRulesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LuckyMoneyRulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
