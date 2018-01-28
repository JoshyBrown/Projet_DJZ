import { Component, OnInit } from '@angular/core';
import { Conseiller } from '../model/conseiller';
import { Observable } from 'rxjs/Observable';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  isLoggedIn$: Observable<boolean>;
  currentUser: any;

  constructor(private authService: AuthenticationService) { }

  ngOnInit() {
    this.isLoggedIn$ = this.authService.isLoggedIn;
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }
}