import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { C4lOddsComponent } from './c4l-odds.component';

describe('C4lOddsComponent', () => {
  let component: C4lOddsComponent;
  let fixture: ComponentFixture<C4lOddsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ C4lOddsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(C4lOddsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
