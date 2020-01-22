import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Pick4RulesComponent } from './pick4-rules.component';

describe('Pick4RulesComponent', () => {
  let component: Pick4RulesComponent;
  let fixture: ComponentFixture<Pick4RulesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pick4RulesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pick4RulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
