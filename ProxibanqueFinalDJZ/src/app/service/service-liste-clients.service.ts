import {Client} from '../model/client';
import {Injectable, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Http, Response} from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ServiceListeClientsService implements OnInit {

  clients: Client[];
  
  /*
  constructor() {
    this.clients = [
      new Client('1', 'Abidal', 'Franck'),
      new Client('2', 'Mamie', 'Gigi'),
      new Client('3', 'Papi', 'Albert'),
    ];
  }
  */
  constructor(private http: Http) { }

  /*
  getAllClients() {
    console.log('service-liste-clients fonctionne');
    return this.clients;
  }
  */
  getAllClients(): Observable<any> {
    console.log('service-liste-clients fonctionne');
    return this.http.get('http://localhost:3000/clients') // vérifier l'URL exacte !!!!!!!!!!
    .map((res: Response) => res.json())
    .catch((error: any) => Observable.throw('Houston, on a un pb!'));
  }

  ngOnInit() {
    console.log('mon serviceListeClients marche');
  }

}
