import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LuckyMoneyOddsComponent } from './lucky-money-odds.component';

describe('LuckyMoneyOddsComponent', () => {
  let component: LuckyMoneyOddsComponent;
  let fixture: ComponentFixture<LuckyMoneyOddsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LuckyMoneyOddsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LuckyMoneyOddsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
