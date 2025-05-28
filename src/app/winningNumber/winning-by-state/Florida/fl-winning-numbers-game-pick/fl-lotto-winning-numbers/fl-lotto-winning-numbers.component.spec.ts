import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlLottoWinningNumbersComponent } from './fl-lotto-winning-numbers.component';

describe('FLLottoWinningNumbersComponent', () => {
  let component: FlLottoWinningNumbersComponent;
  let fixture: ComponentFixture<FlLottoWinningNumbersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlLottoWinningNumbersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlLottoWinningNumbersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
