import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MutliStateGamesComponent } from './mutli-state-games.component';

describe('MutliStateGamesComponent', () => {
  let component: MutliStateGamesComponent;
  let fixture: ComponentFixture<MutliStateGamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MutliStateGamesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MutliStateGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
