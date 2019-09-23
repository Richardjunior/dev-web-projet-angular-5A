import { TestBed } from '@angular/core/testing';

import { BestMovieService } from './best-movie.service';

describe('BestMovieService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BestMovieService = TestBed.get(BestMovieService);
    expect(service).toBeTruthy();
  });
});
