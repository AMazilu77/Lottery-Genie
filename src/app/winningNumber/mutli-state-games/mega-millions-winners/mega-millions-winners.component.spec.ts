import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MegaMillionsWinnersComponent } from './mega-millions-winners.component';

describe('MegaMillionsWinnersComponent', () => {
  let component: MegaMillionsWinnersComponent;
  let fixture: ComponentFixture<MegaMillionsWinnersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MegaMillionsWinnersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MegaMillionsWinnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
