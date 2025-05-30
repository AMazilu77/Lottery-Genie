import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JackpotWinningNumbersComponent } from './jackpot-winning-numbers.component';

describe('JackpotWinningNumbersComponent', () => {
  let component: JackpotWinningNumbersComponent;
  let fixture: ComponentFixture<JackpotWinningNumbersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JackpotWinningNumbersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JackpotWinningNumbersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
