import { TestBed } from '@angular/core/testing';

import { ScategoryService } from './scategory.service';

describe('ScategoryService', () => {
  let service: ScategoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScategoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
