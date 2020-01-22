import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WinningNumbersMainComponent } from './winning-numbers-main.component';

describe('WinningNumbersMainComponent', () => {
  let component: WinningNumbersMainComponent;
  let fixture: ComponentFixture<WinningNumbersMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WinningNumbersMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WinningNumbersMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
