import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FLFantasy5GenComponent } from './flfantasy5-gen.component';

describe('FLFantasy5GenComponent', () => {
  let component: FLFantasy5GenComponent;
  let fixture: ComponentFixture<FLFantasy5GenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FLFantasy5GenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FLFantasy5GenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
