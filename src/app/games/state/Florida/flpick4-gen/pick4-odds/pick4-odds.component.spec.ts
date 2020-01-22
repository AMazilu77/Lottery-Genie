import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Pick4OddsComponent } from './pick4-odds.component';

describe('Pick4OddsComponent', () => {
  let component: Pick4OddsComponent;
  let fixture: ComponentFixture<Pick4OddsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pick4OddsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pick4OddsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
