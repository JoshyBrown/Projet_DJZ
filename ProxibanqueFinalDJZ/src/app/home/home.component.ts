import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  currentUser: any;
  
  constructor() { }

  ngOnInit() {
    console.log('home fonctionne');
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

}
