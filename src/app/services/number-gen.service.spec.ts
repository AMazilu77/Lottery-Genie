import { TestBed } from '@angular/core/testing';

import { NumberGenService } from './number-gen.service';

describe('NumberGenService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NumberGenService = TestBed.get(NumberGenService);
    expect(service).toBeTruthy();
  });
});
