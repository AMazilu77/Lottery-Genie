import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Flpick4GenComponent } from './flpick4-gen.component';

describe('Flpick4GenComponent', () => {
  let component: Flpick4GenComponent;
  let fixture: ComponentFixture<Flpick4GenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Flpick4GenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Flpick4GenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
