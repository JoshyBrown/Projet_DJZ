import { TestBed, inject } from '@angular/core/testing';

import { ServiceListeClientsService } from './service-liste-clients.service';

describe('ServiceListeClientsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServiceListeClientsService]
    });
  });

  it('should be created', inject([ServiceListeClientsService], (service: ServiceListeClientsService) => {
    expect(service).toBeTruthy();
  }));
});
