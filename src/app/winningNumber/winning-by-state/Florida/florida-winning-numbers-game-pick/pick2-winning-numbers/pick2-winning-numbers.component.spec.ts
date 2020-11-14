import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Pick2WinningNumbersComponent } from './pick2-winning-numbers.component';

describe('Pick2WinningNumbersComponent', () => {
  let component: Pick2WinningNumbersComponent;
  let fixture: ComponentFixture<Pick2WinningNumbersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pick2WinningNumbersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pick2WinningNumbersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
