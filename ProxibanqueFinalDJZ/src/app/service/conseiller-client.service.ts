import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { Client } from '../model/client';
import * as CONST from '../constants';

@Injectable()
export class ConseillerClientService {

  private client_url: string = CONST.REST_HOST + '/clients';

  constructor(private http: HttpClient) { }

  getClients(): Observable<Client[]> {
    return this.http.get<Client[]>(this.client_url);
  }
  
  getClient(id): Observable<Client> {
    return this.http.get<Client>(this.client_url + '/' + id);
  }

  addClient(client): Observable<Client>  {
    return this.http.post<Client>(this.client_url, client);
  }
/* SERVICE PAR JILIANG
*/    

  updateClient(client): Observable<Client> {
    return this.http.put<Client>(this.client_url, client);
  }
/* SERVICE PAR Zlatka
updateClient(id): Observable<Client> {
  return this.http.put<Client>(this.client_url, id);
}


  updateClient(client): Observable<Client> {
    return this.http.put<Client>(this.client_url, client);
  }
*/
  deleteClient(client): Observable<any> {
    return this.http.delete(this.client_url, client);
  }

  getClientsByConseiller(id): Observable<Client[]> {
    return this.http.get<Client[]>(this.client_url + '_du_conseiller/' + id);
  }
}
