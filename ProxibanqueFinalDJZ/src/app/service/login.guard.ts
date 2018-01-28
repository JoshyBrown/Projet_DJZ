import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
 
@Injectable()
export class LoginGuard implements CanActivate {
 
    constructor(private router: Router) { }
 
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if ( !localStorage.getItem('currentUser') ) {
            // not logged in so return false to Login page
            return true;
        }
 
        // logged
        this.router.navigate(['/home']);
        return false;
    }
}