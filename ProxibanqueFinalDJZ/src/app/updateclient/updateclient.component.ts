import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

import { ConseillerClientService } from '../service/conseiller-client.service';
import { AlertService } from '../service/alert.service';
import { Client } from '../model/client';

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
    private alertService: AlertService) {
    this.actualClient = new Client();
  }


  onSubmit() {
    if (null == this.actualClient.id) {
      console.log('Client a ajouter : ' + JSON.stringify(this.actualClient));
  
      this.conseillerCLientService.addClient(this.actualClient)
        .subscribe(data => { this.actualClient = data; this.alertService.success('Nouveau client ajoute');},
                    error => this.alertService.error(error.message));
        
    } else {
      console.log('Client a modifier : ' + JSON.stringify(this.actualClient));
  
      this.conseillerCLientService.updateClient(this.actualClient)
        .subscribe(data => { this.actualClient = data; this.alertService.success('Enregistrement reussi');},
                    error => this.alertService.error(error.message));
    }
  }

  ngOnInit() {

    this.route.paramMap.subscribe(params => {
      let id = params.get('id');
      if (null != id) {
        this.conseillerCLientService.getClient(id)
          .subscribe(data => this.actualClient = data, 
                      error => this.alertService.error(error.message));
      }
    });
  }

}

