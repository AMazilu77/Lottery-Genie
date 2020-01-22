import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Pick3RulesAndOddsComponent } from './pick3-rules-and-odds.component';

describe('Pick3RulesAndOddsComponent', () => {
  let component: Pick3RulesAndOddsComponent;
  let fixture: ComponentFixture<Pick3RulesAndOddsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pick3RulesAndOddsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pick3RulesAndOddsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
