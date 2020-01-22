import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { C4lRulesComponent } from './c4l-rules.component';

describe('C4lRulesComponent', () => {
  let component: C4lRulesComponent;
  let fixture: ComponentFixture<C4lRulesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ C4lRulesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(C4lRulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
