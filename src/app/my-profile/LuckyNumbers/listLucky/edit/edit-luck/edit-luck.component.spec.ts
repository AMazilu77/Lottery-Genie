import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditLuckComponent } from './edit-luck.component';

describe('EditLuckComponent', () => {
  let component: EditLuckComponent;
  let fixture: ComponentFixture<EditLuckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditLuckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditLuckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
