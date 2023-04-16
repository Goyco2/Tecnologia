import { TestBed } from '@angular/core/testing';

import { PLayersService } from './Gioca.service';

describe('PLayersService', () => {
  let service: PLayersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PLayersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});