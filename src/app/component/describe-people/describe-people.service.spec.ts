import { TestBed } from '@angular/core/testing';

import { DescribePeopleService } from './describe-people.service';

describe('DescribePeopleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DescribePeopleService = TestBed.get(DescribePeopleService);
    expect(service).toBeTruthy();
  });
});
