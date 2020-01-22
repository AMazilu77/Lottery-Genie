import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Flpick2GenComponent } from './flpick2-gen.component';

describe('Flpick2GenComponent', () => {
  let component: Flpick2GenComponent;
  let fixture: ComponentFixture<Flpick2GenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Flpick2GenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Flpick2GenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
