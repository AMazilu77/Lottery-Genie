import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CashForLifeComponent } from './cash-for-life.component';

describe('CashForLifeComponent', () => {
  let component: CashForLifeComponent;
  let fixture: ComponentFixture<CashForLifeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CashForLifeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CashForLifeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
