import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CashForLifeWinnersComponent } from './cash-for-life-winners.component';

describe('CashForLifeWinnersComponent', () => {
  let component: CashForLifeWinnersComponent;
  let fixture: ComponentFixture<CashForLifeWinnersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CashForLifeWinnersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CashForLifeWinnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
