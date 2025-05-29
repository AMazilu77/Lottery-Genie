import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Fantasy5WinnersComponent } from './fantasy5-winners.component';

describe('Fantasy5WinnersComponent', () => {
  let component: Fantasy5WinnersComponent;
  let fixture: ComponentFixture<Fantasy5WinnersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Fantasy5WinnersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Fantasy5WinnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
