import { TestBed, inject } from '@angular/core/testing';

import { UpdateclientService } from './updateclient.service';

describe('UpdateclientService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UpdateclientService]
    });
  });

  it('should be created', inject([UpdateclientService], (service: UpdateclientService) => {
    expect(service).toBeTruthy();
  }));
});
