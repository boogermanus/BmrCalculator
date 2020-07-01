import { TestBed } from '@angular/core/testing';

import { BmrCalculatorService } from './bmr-calculator.service';

describe('BmrCalculatorService', () => {
  let service: BmrCalculatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BmrCalculatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
