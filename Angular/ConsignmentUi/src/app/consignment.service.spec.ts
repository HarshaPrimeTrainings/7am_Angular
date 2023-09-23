import { TestBed } from '@angular/core/testing';

import { ConsignmentService } from './consignment.service';

describe('ConsignmentService', () => {
  let service: ConsignmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsignmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
