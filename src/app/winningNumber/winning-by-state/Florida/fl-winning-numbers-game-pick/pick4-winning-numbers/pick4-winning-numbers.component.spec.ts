import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pick4WinningNumbersComponent } from './pick4-winning-numbers.component';

describe('Pick4WinningNumbersComponent', () => {
  let component: Pick4WinningNumbersComponent;
  let fixture: ComponentFixture<Pick4WinningNumbersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pick4WinningNumbersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Pick4WinningNumbersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
