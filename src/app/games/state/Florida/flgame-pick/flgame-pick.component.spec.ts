import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlgamePickComponent } from './flgame-pick.component';

describe('FlgamePickComponent', () => {
  let component: FlgamePickComponent;
  let fixture: ComponentFixture<FlgamePickComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlgamePickComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlgamePickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
