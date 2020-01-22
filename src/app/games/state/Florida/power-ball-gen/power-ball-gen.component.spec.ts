import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PowerBallGenComponent } from './power-ball-gen.component';

describe('PowerBallGenComponent', () => {
  let component: PowerBallGenComponent;
  let fixture: ComponentFixture<PowerBallGenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PowerBallGenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PowerBallGenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
