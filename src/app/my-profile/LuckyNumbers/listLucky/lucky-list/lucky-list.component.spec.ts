import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LuckyListComponent } from './lucky-list.component';

describe('LuckyListComponent', () => {
  let component: LuckyListComponent;
  let fixture: ComponentFixture<LuckyListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LuckyListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LuckyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
