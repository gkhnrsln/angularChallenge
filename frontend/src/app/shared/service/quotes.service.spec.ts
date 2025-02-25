import { TestBed } from '@angular/core/testing';

import { QuotesService } from './quotes.service';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

describe('QuotesService', () => {
  let service: QuotesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
      ]
    });
    service = TestBed.inject(QuotesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
