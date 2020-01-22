import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Pick4RulesAndOddsComponent } from './pick4-rules-and-odds.component';

describe('Pick4RulesAndOddsComponent', () => {
  let component: Pick4RulesAndOddsComponent;
  let fixture: ComponentFixture<Pick4RulesAndOddsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pick4RulesAndOddsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pick4RulesAndOddsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
