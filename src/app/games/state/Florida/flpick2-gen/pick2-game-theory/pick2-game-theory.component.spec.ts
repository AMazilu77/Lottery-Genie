import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Pick2GameTheoryComponent } from './pick2-game-theory.component';

describe('Pick2GameTheoryComponent', () => {
  let component: Pick2GameTheoryComponent;
  let fixture: ComponentFixture<Pick2GameTheoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pick2GameTheoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pick2GameTheoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
