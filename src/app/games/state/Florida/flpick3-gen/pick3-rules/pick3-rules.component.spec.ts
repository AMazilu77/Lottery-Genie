import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Pick3RulesComponent } from './pick3-rules.component';

describe('Pick3RulesComponent', () => {
  let component: Pick3RulesComponent;
  let fixture: ComponentFixture<Pick3RulesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pick3RulesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pick3RulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
