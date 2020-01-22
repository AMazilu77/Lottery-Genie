import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Pick3GameTheoryComponent } from './pick3-game-theory.component';

describe('Pick3GameTheoryComponent', () => {
  let component: Pick3GameTheoryComponent;
  let fixture: ComponentFixture<Pick3GameTheoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pick3GameTheoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pick3GameTheoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
