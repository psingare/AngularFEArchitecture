import { TestBed } from '@angular/core/testing';

import { ContentPackService } from './content-pack.service';

describe('ContentPackService', () => {
  let service: ContentPackService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContentPackService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
