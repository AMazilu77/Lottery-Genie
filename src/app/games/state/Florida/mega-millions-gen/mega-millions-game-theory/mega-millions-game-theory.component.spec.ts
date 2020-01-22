import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MegaMillionsGameTheoryComponent } from './mega-millions-game-theory.component';

describe('MegaMillionsGameTheoryComponent', () => {
  let component: MegaMillionsGameTheoryComponent;
  let fixture: ComponentFixture<MegaMillionsGameTheoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MegaMillionsGameTheoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MegaMillionsGameTheoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
