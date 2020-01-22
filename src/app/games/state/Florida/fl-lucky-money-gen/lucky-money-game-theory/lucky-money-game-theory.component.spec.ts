import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LuckyMoneyGameTheoryComponent } from './lucky-money-game-theory.component';

describe('LuckyMoneyGameTheoryComponent', () => {
  let component: LuckyMoneyGameTheoryComponent;
  let fixture: ComponentFixture<LuckyMoneyGameTheoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LuckyMoneyGameTheoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LuckyMoneyGameTheoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
