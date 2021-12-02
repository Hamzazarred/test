import { TestBed } from '@angular/core/testing';

import { DiscriptionService } from './discription.service';

describe('DiscriptionService', () => {
  let service: DiscriptionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DiscriptionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
