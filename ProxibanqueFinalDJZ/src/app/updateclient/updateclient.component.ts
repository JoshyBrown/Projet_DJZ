import { Client } from '../model/client';
import { Component, OnInit } from '@angular/core';
import {UpdateclientService} from '../service/updateclient.service';
import { Output } from '@angular/core/src/metadata/directives';

@Component({
  selector: 'app-updateclient',
  templateUrl: './updateclient.component.html',
  styleUrls: ['./updateclient.component.css'],
  providers: [UpdateclientService]
})
export class UpdateclientComponent implements OnInit {

//  constructor() { }

  client1 = new Client('12', 'baba', 'diado');
  
  
  constructor(private myService: UpdateclientService) { }
  
    listDeClients: Client[];
  //  client1: Client[] = this.listDeClients;

  listMyClients() {
    this.myService.getCli().subscribe((data => this.listDeClients = data),
      error => console.log('Error in the Service part'));

  }
  console.log('Client avec ID: ' + this.listDeClients[1].nom);

  ngOnInit() {
    // client1: Client;
    this.listMyClients();
    console.log('Bonjour');
  }

   onSubmit() {
console.log('Hello');
console.log('Client avec ID: ' + this.client1.id + 'Le nom du client est ' + this.client1.nom + '  et son prenom ' + this.client1.prenom);
  }


//  ngOnInit() {
//  }

}
