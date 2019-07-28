import { TestBed } from '@angular/core/testing';

import { Starwar1Service } from './starwar1.service';

describe('Starwar1Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Starwar1Service = TestBed.get(Starwar1Service);
    expect(service).toBeTruthy();
  });
});
