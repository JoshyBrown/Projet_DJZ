import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { Output } from '@angular/core/src/metadata/directives';
import { Adresse } from '../model/adresse';
import { Client } from '../model/client';
import { ConseillerClientService } from '../service/conseiller-client.service';
import { AlertService } from '../service/alert.service';
import * as CONST from '../constants';

@Component({
  selector: 'app-updateclient',
  templateUrl: './updateclient.component.html',
  styleUrls: ['./updateclient.component.css'],
  providers: [ConseillerClientService]
})
export class UpdateclientComponent implements OnInit {

  actualClient: Client;
  
  idClient: string;

  private clients_list_url: string = CONST.REST_HOST + '/clients';

  constructor(
    private conseillerCLientService: ConseillerClientService, 
    private route: ActivatedRoute,
    private alertService: AlertService,
    private myService: ConseillerClientService ) { }
  
  
   onSubmit() {
    
     console.log('Client a modifier : ' + JSON.stringify(this.actualClient));
    
     this.conseillerCLientService.updateClient(this.actualClient)
       .subscribe(data => this.actualClient = data, error => this.alertService.error(error));
   }


   ngOnInit() { 
     this.route.paramMap.subscribe(params => 
       this.conseillerCLientService.getClient(params.get('id'))
         .subscribe(data => this.actualClient = data, error => this.alertService.error(error))
       );
  }

  // goBack(){
  //   this.route.paramMap
  // }
  
}

