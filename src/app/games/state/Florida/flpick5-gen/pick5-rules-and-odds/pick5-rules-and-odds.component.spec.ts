import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Pick5RulesAndOddsComponent } from './pick5-rules-and-odds.component';

describe('Pick5RulesAndOddsComponent', () => {
  let component: Pick5RulesAndOddsComponent;
  let fixture: ComponentFixture<Pick5RulesAndOddsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pick5RulesAndOddsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pick5RulesAndOddsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
