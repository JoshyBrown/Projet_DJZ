import { Client } from '../model/client';
import {ServiceListeClientsService} from '../service/service-liste-clients.service';
import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-liste-clients',
  templateUrl: './liste-clients.component.html',
  styleUrls: ['./liste-clients.component.css'],
  providers: [ServiceListeClientsService]
})
export class ListeClientsComponent implements OnInit {

  @Input()
  clients: Client[];

  constructor(private serviceListeClients: ServiceListeClientsService) {
//    this.clients = this.serviceListeClients.getAllClients();
  }

  ngOnInit() {
    console.log('liste-client component marche');
  }

}
