import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MegaMillionsGenComponent } from './mega-millions-gen.component';

describe('MegaMillionsGenComponent', () => {
  let component: MegaMillionsGenComponent;
  let fixture: ComponentFixture<MegaMillionsGenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MegaMillionsGenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MegaMillionsGenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
