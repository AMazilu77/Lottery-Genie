import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenieLampHomeComponent } from './genie-lamp-home.component';

describe('GenieLampHomeComponent', () => {
  let component: GenieLampHomeComponent;
  let fixture: ComponentFixture<GenieLampHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenieLampHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenieLampHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
