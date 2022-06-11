import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PowerballWinnersComponent } from './powerball-winners.component';

describe('PowerballWinnersComponent', () => {
  let component: PowerballWinnersComponent;
  let fixture: ComponentFixture<PowerballWinnersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PowerballWinnersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PowerballWinnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
