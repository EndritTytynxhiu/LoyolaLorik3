import { TestBed } from '@angular/core/testing';

import { VitiShkollorService } from './viti-shkollor.service';

describe('VitiShkollorService', () => {
  let service: VitiShkollorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VitiShkollorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
