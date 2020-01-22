import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Pick4GameTheoryComponent } from './pick4-game-theory.component';

describe('Pick4GameTheoryComponent', () => {
  let component: Pick4GameTheoryComponent;
  let fixture: ComponentFixture<Pick4GameTheoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pick4GameTheoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pick4GameTheoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
