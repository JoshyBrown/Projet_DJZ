import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

import { Client } from '../model/client';
import { Virement } from '../model/virement';
import { ConseillerClientService } from '../service/conseiller-client.service';
import { VirementService } from '../service/virement.service';
import { AlertService } from '../service/alert.service';

@Component({
  selector: 'app-virement',
  templateUrl: './virement.component.html',
  styleUrls: ['./virement.component.css']
})

export class VirementComponent implements OnInit {

  clients: Client[];
  allClients: Client[];

  virement: Virement;

  constructor(
    private conseillerCLientService: ConseillerClientService,
    private virementService: VirementService,
    private alertService: AlertService) { }
  
  getClientsByConseiller() {
    this.conseillerCLientService.getClientsByConseiller(JSON.parse(localStorage.getItem('currentUser')).id)
      .subscribe(data => this.clients = data, error => this.alertService.error(error));

    return false;
  }
  
  getAllClients() {
    this.conseillerCLientService.getClients()
      .subscribe(data => this.allClients = data, error => this.alertService.error(error));

    return false;
  }

  selectDebiteur(client: Client): void {
    console.log(client);
  }

  onSubmit() {
    this.virementService.doVirement(this.virement)
      .subscribe(data => this.virement = data, error => this.alertService.error(error));
  }

  ngOnInit() {

    this.getAllClients();
    this.getClientsByConseiller();
  }
}
