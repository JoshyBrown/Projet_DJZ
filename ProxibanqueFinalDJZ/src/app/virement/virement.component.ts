import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

import { Client } from '../model/client';
import { ConseillerClientService } from '../service/conseiller-client.service';
import { AlertService } from '../service/alert.service';

@Component({
  selector: 'app-virement',
  templateUrl: './virement.component.html',
  styleUrls: ['./virement.component.css']
})

export class VirementComponent implements OnInit {

  clients: Client[];
  allClients: Client[];

  debiteur: Client;
  crediteur: Client;

  montant: number;

  constructor(
    private conseillerCLientService: ConseillerClientService,
    private alertService: AlertService) { }
  
  getClientsByConseiller() {
    const id = '2';
    this.conseillerCLientService.getClientsByConseiller(id)
      .subscribe(data => this.clients = data, error => this.alertService.error(error));

    return false;
  }
  
  getAllClients() {
    this.conseillerCLientService.getClients()
      .subscribe(data => this.allClients = data, error => this.alertService.error(error));

    return false;
  }

  ngOnInit() {
    console.log('liste-client component marche');
    this.getAllClients();
    this.getClientsByConseiller();
  }
}
