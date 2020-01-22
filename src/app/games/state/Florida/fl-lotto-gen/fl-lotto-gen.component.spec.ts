import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlLottoGenComponent } from './fl-lotto-gen.component';

describe('FlLottoGenComponent', () => {
  let component: FlLottoGenComponent;
  let fixture: ComponentFixture<FlLottoGenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlLottoGenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlLottoGenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
