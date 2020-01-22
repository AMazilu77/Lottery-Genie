import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MegaMillionsRulesAndOddsComponent } from './mega-millions-rules-and-odds.component';

describe('MegaMillionsRulesAndOddsComponent', () => {
  let component: MegaMillionsRulesAndOddsComponent;
  let fixture: ComponentFixture<MegaMillionsRulesAndOddsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MegaMillionsRulesAndOddsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MegaMillionsRulesAndOddsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
