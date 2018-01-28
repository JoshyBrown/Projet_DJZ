import { Component, OnInit, Input } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

import { Client } from '../model/client';
import { ConseillerClientService } from '../service/conseiller-client.service';
import { AlertService } from '../service/alert.service';

@Component({
  selector: 'app-liste-clients',
  templateUrl: './liste-clients.component.html',
  styleUrls: ['./liste-clients.component.css']
})
export class ListeClientsComponent implements OnInit {

  clients: Array<Client>;

  constructor(private conseillerCLientService: ConseillerClientService, private alertService: AlertService) { }

  deleteUser(id) {
    this.conseillerCLientService.deleteClient(id)
      .subscribe(() => { this.getAllClients() }), error => this.alertService.error(error);

      return false;
  }

  getAllClients() {
    this.conseillerCLientService.getClients()
      .subscribe(data => this.clients = data, error => this.alertService.error(error));

    return false;
  }

  ngOnInit() {
    console.log('liste-client component marche');
    this.getAllClients();
  }

}
