import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Pick2OddsComponent } from './pick2-odds.component';

describe('Pick2OddsComponent', () => {
  let component: Pick2OddsComponent;
  let fixture: ComponentFixture<Pick2OddsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pick2OddsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pick2OddsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
