import { TestBed } from '@angular/core/testing';

import { CommonObservableService } from './common-observable.service';

describe('CommonObservableService', () => {
  let service: CommonObservableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommonObservableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
