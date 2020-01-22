import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Fantasy5GameTheoryComponent } from './fantasy5-game-theory.component';

describe('Fantasy5GameTheoryComponent', () => {
  let component: Fantasy5GameTheoryComponent;
  let fixture: ComponentFixture<Fantasy5GameTheoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Fantasy5GameTheoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Fantasy5GameTheoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
