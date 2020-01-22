import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Pick5OddsComponent } from './pick5-odds.component';

describe('Pick5OddsComponent', () => {
  let component: Pick5OddsComponent;
  let fixture: ComponentFixture<Pick5OddsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pick5OddsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pick5OddsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
