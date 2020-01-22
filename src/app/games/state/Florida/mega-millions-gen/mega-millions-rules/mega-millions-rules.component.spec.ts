import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MegaMillionsRulesComponent } from './mega-millions-rules.component';

describe('MegaMillionsRulesComponent', () => {
  let component: MegaMillionsRulesComponent;
  let fixture: ComponentFixture<MegaMillionsRulesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MegaMillionsRulesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MegaMillionsRulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
