import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { C4lGametheoryComponent } from './c4l-gametheory.component';

describe('C4lGametheoryComponent', () => {
  let component: C4lGametheoryComponent;
  let fixture: ComponentFixture<C4lGametheoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ C4lGametheoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(C4lGametheoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
