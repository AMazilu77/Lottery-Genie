import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Fantasy5RulesComponent } from './fantasy5-rules.component';

describe('Fantasy5RulesComponent', () => {
  let component: Fantasy5RulesComponent;
  let fixture: ComponentFixture<Fantasy5RulesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Fantasy5RulesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Fantasy5RulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
