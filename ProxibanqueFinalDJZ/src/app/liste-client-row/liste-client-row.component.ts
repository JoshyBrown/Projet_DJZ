import { Client } from '../model/client';
import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-liste-client-row',
  templateUrl: './liste-client-row.component.html',
  styleUrls: ['./liste-client-row.component.css']
})
export class ListeClientRowComponent implements OnInit {

  @Input()
  client: Client;

  constructor() {}
  
  ngOnInit() {
    console.log('liste-client-row component marche');
  }

}
