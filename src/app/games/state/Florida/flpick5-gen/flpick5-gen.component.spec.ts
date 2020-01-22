import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Flpick5GenComponent } from './flpick5-gen.component';

describe('Flpick5GenComponent', () => {
  let component: Flpick5GenComponent;
  let fixture: ComponentFixture<Flpick5GenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Flpick5GenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Flpick5GenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
