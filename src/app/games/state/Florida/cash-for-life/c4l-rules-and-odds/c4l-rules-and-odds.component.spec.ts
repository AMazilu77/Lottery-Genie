import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { C4lRulesAndOddsComponent } from './c4l-rules-and-odds.component';

describe('C4lRulesAndOddsComponent', () => {
  let component: C4lRulesAndOddsComponent;
  let fixture: ComponentFixture<C4lRulesAndOddsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ C4lRulesAndOddsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(C4lRulesAndOddsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
