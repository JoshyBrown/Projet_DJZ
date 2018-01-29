import { Client } from '../model/client';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ConseillerClientService } from '../service/conseiller-client.service';
import { AlertService } from '../service/alert.service';

@Component({
  selector: 'app-delete-client',
  templateUrl: './delete-client.component.html',
  styleUrls: ['./delete-client.component.css']
})
export class DeleteClientComponent implements OnInit {
  
  clientToDelete: Client;
  
  constructor(
    private conseillerCLientService: ConseillerClientService, 
    private router: Router,
    private route: ActivatedRoute,
    private alertService: AlertService ) { }

  deleteClient() {
    console.log('Client a supprimer : ' + JSON.stringify(this.clientToDelete));

    this.conseillerCLientService.deleteClient(this.clientToDelete.id)
      .subscribe(() => { this.retour(); this.alertService.success('Suppression de client reussi') }, 
          error => this.alertService.error(error));

      return false; 
  } 
  
  retour() {  
    this.router.navigate(['/gestion-client']);
  }
   
  ngOnInit() {
    this.route.paramMap.subscribe(params => 
      this.conseillerCLientService.getClient(params.get('id'))
        .subscribe(data => this.clientToDelete = data, error => this.alertService.error(error))
      );
  }

}
