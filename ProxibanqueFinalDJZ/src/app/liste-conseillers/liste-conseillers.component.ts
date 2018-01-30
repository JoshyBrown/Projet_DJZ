import { Component, OnInit } from '@angular/core';

import { Conseiller } from '../model/conseiller';

@Component({
  selector: 'app-liste-conseillers',
  templateUrl: './liste-conseillers.component.html',
  styleUrls: ['./liste-conseillers.component.css']
})
export class ListeConseillersComponent implements OnInit {

  conseillers: Array<Conseiller>;

  constructor() { }

  ngOnInit() {
  }

}
