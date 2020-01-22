import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Flpick3GenComponent } from './flpick3-gen.component';

describe('Flpick3GenComponent', () => {
  let component: Flpick3GenComponent;
  let fixture: ComponentFixture<Flpick3GenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Flpick3GenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Flpick3GenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
