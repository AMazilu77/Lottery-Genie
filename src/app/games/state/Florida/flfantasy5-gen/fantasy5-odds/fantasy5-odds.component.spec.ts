import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Fantasy5OddsComponent } from './fantasy5-odds.component';

describe('Fantasy5OddsComponent', () => {
  let component: Fantasy5OddsComponent;
  let fixture: ComponentFixture<Fantasy5OddsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Fantasy5OddsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Fantasy5OddsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
