import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pick5WinningNumbersComponent } from './pick5-winning-numbers.component';

describe('Pick5WinningNumbersComponent', () => {
  let component: Pick5WinningNumbersComponent;
  let fixture: ComponentFixture<Pick5WinningNumbersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pick5WinningNumbersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Pick5WinningNumbersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
