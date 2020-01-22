import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LotteryNumberGenMainPageComponent } from './lottery-number-gen-main-page.component';

describe('LotteryNumberGenMainPageComponent', () => {
  let component: LotteryNumberGenMainPageComponent;
  let fixture: ComponentFixture<LotteryNumberGenMainPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LotteryNumberGenMainPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LotteryNumberGenMainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
