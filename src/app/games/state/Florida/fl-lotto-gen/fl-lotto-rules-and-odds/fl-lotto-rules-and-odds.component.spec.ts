import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FLLottoRulesAndOddsComponent } from './fl-lotto-rules-and-odds.component';

describe('FLLottoRulesAndOddsComponent', () => {
  let component: FLLottoRulesAndOddsComponent;
  let fixture: ComponentFixture<FLLottoRulesAndOddsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FLLottoRulesAndOddsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FLLottoRulesAndOddsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
