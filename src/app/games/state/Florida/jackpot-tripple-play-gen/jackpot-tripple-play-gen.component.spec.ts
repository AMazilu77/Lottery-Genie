import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JackpotTriplePlayGeneratorComponent } from './jackpot-tripple-play-gen.component';

describe('JackpotTriplePlayComponent', () => {
  let component: JackpotTriplePlayGeneratorComponent;
  let fixture: ComponentFixture<JackpotTriplePlayGeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JackpotTriplePlayGeneratorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JackpotTriplePlayGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
