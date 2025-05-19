import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StateGamePickComponent } from './state-game-pick.component';

describe('StateGamePickComponent', () => {
  let component: StateGamePickComponent;
  let fixture: ComponentFixture<StateGamePickComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StateGamePickComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StateGamePickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
