import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FLPick2GenComponent } from './flpick2-gen.component';

describe('Flpick2GenComponent', () => {
  let component: FLPick2GenComponent;
  let fixture: ComponentFixture<FLPick2GenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FLPick2GenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FLPick2GenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
