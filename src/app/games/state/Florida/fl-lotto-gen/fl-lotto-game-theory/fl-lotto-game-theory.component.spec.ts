import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FLLottoGameTheoryComponent } from './fl-lotto-game-theory.component';

describe('FLLottoGameTheoryComponent', () => {
  let component: FLLottoGameTheoryComponent;
  let fixture: ComponentFixture<FLLottoGameTheoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FLLottoGameTheoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FLLottoGameTheoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
