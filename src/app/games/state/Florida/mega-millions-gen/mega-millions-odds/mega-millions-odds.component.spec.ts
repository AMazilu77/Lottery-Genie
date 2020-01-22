import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MegaMillionsOddsComponent } from './mega-millions-odds.component';

describe('MegaMillionsOddsComponent', () => {
  let component: MegaMillionsOddsComponent;
  let fixture: ComponentFixture<MegaMillionsOddsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MegaMillionsOddsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MegaMillionsOddsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
