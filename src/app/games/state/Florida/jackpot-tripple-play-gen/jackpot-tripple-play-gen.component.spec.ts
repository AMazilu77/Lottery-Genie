import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JackpotTriplePlayGenComponent } from './jackpot-tripple-play-gen.component';

describe('JackpotTriplePlayComponent', () => {
  let component: JackpotTriplePlayGenComponent;
  let fixture: ComponentFixture<JackpotTriplePlayGenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JackpotTriplePlayGenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JackpotTriplePlayGenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
