import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FLLottoWinningNumbersComponent } from './fl-lotto-winning-numbers.component';

describe('FLLottoWinningNumbersComponent', () => {
  let component: FLLottoWinningNumbersComponent;
  let fixture: ComponentFixture<FLLottoWinningNumbersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FLLottoWinningNumbersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FLLottoWinningNumbersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
