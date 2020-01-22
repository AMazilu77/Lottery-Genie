import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FLLottoOddsComponent } from './fl-lotto-odds.component';

describe('FLLottoOddsComponent', () => {
  let component: FLLottoOddsComponent;
  let fixture: ComponentFixture<FLLottoOddsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FLLottoOddsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FLLottoOddsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
