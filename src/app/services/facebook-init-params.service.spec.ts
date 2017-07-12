import { TestBed, inject } from '@angular/core/testing';

import { FacebookInitParamsService } from './facebook-init-params.service';

describe('FacebookInitParamsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FacebookInitParamsService]
    });
  });

  it('should be created', inject([FacebookInitParamsService], (service: FacebookInitParamsService) => {
    expect(service).toBeTruthy();
  }));
});
