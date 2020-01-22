import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Pick3OddsComponent } from './pick3-odds.component';

describe('Pick3OddsComponent', () => {
  let component: Pick3OddsComponent;
  let fixture: ComponentFixture<Pick3OddsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pick3OddsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pick3OddsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
