import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Pick2RulesComponent } from './pick2-rules.component';

describe('Pick2RulesComponent', () => {
  let component: Pick2RulesComponent;
  let fixture: ComponentFixture<Pick2RulesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pick2RulesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pick2RulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
