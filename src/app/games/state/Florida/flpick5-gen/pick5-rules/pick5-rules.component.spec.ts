import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Pick5RulesComponent } from './pick5-rules.component';

describe('Pick5RulesComponent', () => {
  let component: Pick5RulesComponent;
  let fixture: ComponentFixture<Pick5RulesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pick5RulesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pick5RulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
