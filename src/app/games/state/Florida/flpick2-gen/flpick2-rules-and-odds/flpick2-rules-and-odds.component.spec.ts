import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Flpick2RulesAndOddsComponent } from './flpick2-rules-and-odds.component';

describe('Flpick2RulesAndOddsComponent', () => {
  let component: Flpick2RulesAndOddsComponent;
  let fixture: ComponentFixture<Flpick2RulesAndOddsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Flpick2RulesAndOddsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Flpick2RulesAndOddsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
