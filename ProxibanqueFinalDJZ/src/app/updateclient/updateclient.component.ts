import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

import { Client } from '../model/client';
import { ConseillerClientService } from '../service/conseiller-client.service';
import { AlertService } from '../service/alert.service';

@Component({
  selector: 'app-updateclient',
  templateUrl: './updateclient.component.html',
  styleUrls: ['./updateclient.component.css']
})
export class UpdateclientComponent implements OnInit {

  actualClient: Client;

  constructor(
    private conseillerCLientService: ConseillerClientService, 
    private route: ActivatedRoute,
    private alertService: AlertService ) { }

  onSubmit() {

    this.conseillerCLientService.updateClient(this.actualClient)
      .subscribe(data => this.actualClient = data, error => this.alertService.error(error));
  }


  ngOnInit() {
    this.route.paramMap.subscribe(params => 
      this.conseillerCLientService.getClient(params.get('id'))
        .subscribe(data => this.actualClient = data, error => this.alertService.error(error))
      );
  }
}
