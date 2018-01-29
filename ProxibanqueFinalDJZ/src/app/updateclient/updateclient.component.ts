import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { Output } from '@angular/core/src/metadata/directives';
import { Adresse } from '../model/adresse';
import { Client } from '../model/client';
import { ConseillerClientService } from '../service/conseiller-client.service';
import { AlertService } from '../service/alert.service';

@Component({
  selector: 'app-updateclient',
  templateUrl: './updateclient.component.html',
  styleUrls: ['./updateclient.component.css'],
  providers: [ConseillerClientService]
})
export class UpdateclientComponent implements OnInit {

  actualClient: Client;

  constructor(
    private conseillerCLientService: ConseillerClientService, 
    private route: ActivatedRoute,
    private alertService: AlertService,
    private myService: ConseillerClientService ) { }
  
  
  // onSubmit() {
    
  //   console.log('Client a modifier : ' + JSON.stringify(this.actualClient));
    
  //   this.conseillerCLientService.updateClient(this.actualClient)
  //     .subscribe(data => this.actualClient = data, error => this.alertService.error(error));
  // }


  // ngOnInit() {
  //   this.route.paramMap.subscribe(params => 
  //     this.conseillerCLientService.getClient(params.get('id'))
  //       .subscribe(data => this.actualClient = data, error => this.alertService.error(error))
  //     );

      getMonClient(){
        this.myService.getClient(9).subscribe((data => this.actualClient = data),
          error => console.log('Error in the Service part'));
          console.log('Client avec ID: ' + this.actualClient.id + 'Le nom du client est ' + this.actualClient.nom + '  et son prenom ' + this.actualClient.prenom);
      }
  
      updateMonClient(cl:Client){
        this.myService.updateClient(cl).subscribe((data => this.actualClient = data),
          error => console.log('Error in the Service part'));
          console.log('Client avec ID: ' + this.actualClient.id + 'Le nom du client est ' + this.actualClient.nom + '  et son prenom ' + this.actualClient.prenom);
      }
  
  
    ngOnInit() {
      console.log('Bonjour');
      this.getMonClient();
    }
  
     onSubmit() {
  console.log('Hello');
  this.updateMonClient(this.actualClient);
  // console.log('Client avec ID: ' + this.actualClient.id + 'Le nom du client est ' + this.actualClient.nom + '  et son prenom ' + this.actualClient.prenom);
    }
  
  
}

