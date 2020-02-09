import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateLuckyNumberComponent } from './create-lucky-number.component';

describe('CreateLuckyNumberComponent', () => {
  let component: CreateLuckyNumberComponent;
  let fixture: ComponentFixture<CreateLuckyNumberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateLuckyNumberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateLuckyNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
