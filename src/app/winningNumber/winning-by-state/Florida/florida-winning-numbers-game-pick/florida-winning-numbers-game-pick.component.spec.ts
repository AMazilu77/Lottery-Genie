import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FloridaWinningNumbersGamePickComponent } from './florida-winning-numbers-game-pick.component';

describe('FloridaWinningNumbersGamePickComponent', () => {
  let component: FloridaWinningNumbersGamePickComponent;
  let fixture: ComponentFixture<FloridaWinningNumbersGamePickComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FloridaWinningNumbersGamePickComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FloridaWinningNumbersGamePickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
