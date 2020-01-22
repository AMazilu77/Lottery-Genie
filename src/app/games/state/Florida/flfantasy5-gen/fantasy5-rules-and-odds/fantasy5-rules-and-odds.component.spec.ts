import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Fantasy5RulesAndOddsComponent } from './fantasy5-rules-and-odds.component';

describe('Fantasy5RulesAndOddsComponent', () => {
  let component: Fantasy5RulesAndOddsComponent;
  let fixture: ComponentFixture<Fantasy5RulesAndOddsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Fantasy5RulesAndOddsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Fantasy5RulesAndOddsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
