import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FLLottoRulesComponent } from './fl-lotto-rules.component';

describe('FLLottoRulesComponent', () => {
  let component: FLLottoRulesComponent;
  let fixture: ComponentFixture<FLLottoRulesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FLLottoRulesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FLLottoRulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
