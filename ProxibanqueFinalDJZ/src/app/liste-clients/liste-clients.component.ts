import {Client} from '../model/client';
import {ServiceListeClientsService} from '../service/service-liste-clients.service';
import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-liste-clients',
  templateUrl: './liste-clients.component.html',
  styleUrls: ['./liste-clients.component.css'],
  providers: [ServiceListeClientsService]
})
export class ListeClientsComponent implements OnInit {

  clients: Array<Client>;

  constructor(private serviceListeClients: ServiceListeClientsService) { }

  getAllClients(){
    this.serviceListeClients.getAllClients()
    .subscribe(data => this.clients = data,
    error => console.log('Mayday, mayday !'));
  }

  ngOnInit() {
    console.log('liste-client component marche');
    this.getAllClients();
  }

}
