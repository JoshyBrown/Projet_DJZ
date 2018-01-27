import { Client } from '../model/client';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-updateclient',
  templateUrl: './updateclient.component.html',
  styleUrls: ['./updateclient.component.css']
})
export class UpdateclientComponent implements OnInit {

  constructor() { }

  client1 = new Client('12', 'baba', 'diado');

   onSubmit() {

  console.log('Client avec ID: ' + this.client1.id + 'Le nom du client est ' + this.client1.nom + '  et son prenom ' + this.client1.prenom);
  }


  ngOnInit() {
  }

}
