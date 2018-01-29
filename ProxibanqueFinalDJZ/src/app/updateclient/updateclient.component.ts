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


}
