import {Client} from '../model/client';
import {Injectable} from '@angular/core';

@Injectable()
export class ServiceListeClientsService {

  clients: Client[];

  constructor() {
    this.clients = [
      new Client('1', 'Abidal', 'Franck'),
      new Client('2', 'Mamie', 'Gigi'),
      new Client('3', 'Papi', 'Albert'),
    ];
  }

    getAllClients() {
    console.log('service-liste-clients fonctionne');
    return this.clients;
  }

}
