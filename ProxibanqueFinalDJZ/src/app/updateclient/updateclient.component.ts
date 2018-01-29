<<<<<<< HEAD
=======
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { Output } from '@angular/core/src/metadata/directives';
import { Adresse } from '../model/adresse';
>>>>>>> c8196080cfbc4591f5142642509e02d79f5fe2ee
import { Client } from '../model/client';
import { Component, OnInit } from '@angular/core';
import {ConseillerClientService} from '../service/conseiller-client.service';
import { Output } from '@angular/core/src/metadata/directives';
import { Adresse } from '../model/adresse';

@Component({
  selector: 'app-updateclient',
  templateUrl: './updateclient.component.html',
  styleUrls: ['./updateclient.component.css'],
  providers: [ConseillerClientService]
})
export class UpdateclientComponent implements OnInit {

  
  //  constructor() { }
  // client1: Client; // = new Client('12', 'baba', 'diado');
  // actualClient = new Client('122', 'CLM', 'Dianov', 'Dido');
  
  actualClient: Client;
  
<<<<<<< HEAD
  constructor(private myService: ConseillerClientService) { }
  
 

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


=======
  idClient: string;

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
  
>>>>>>> c8196080cfbc4591f5142642509e02d79f5fe2ee
}

