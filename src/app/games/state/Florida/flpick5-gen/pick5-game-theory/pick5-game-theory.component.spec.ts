import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Pick5GameTheoryComponent } from './pick5-game-theory.component';

describe('Pick5GameTheoryComponent', () => {
  let component: Pick5GameTheoryComponent;
  let fixture: ComponentFixture<Pick5GameTheoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pick5GameTheoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pick5GameTheoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
