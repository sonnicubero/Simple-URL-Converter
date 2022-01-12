import { TestBed } from '@angular/core/testing';

import { UrlconverterService } from './urlconverter.service';

describe('UrlconverterService', () => {
  let service: UrlconverterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UrlconverterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
