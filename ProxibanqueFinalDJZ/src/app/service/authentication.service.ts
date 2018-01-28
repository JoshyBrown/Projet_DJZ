import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import * as CONST from '../constants';

@Injectable()
export class AuthenticationService {
    
    private auth_url: string = CONST.REST_HOST + '/auth';

    constructor(private http: HttpClient) { }

    auth(login: string, password: string) {
        console.log(`login service ${login} ${password}`);

        var jsonBody: any = { '@class': 'org.formation.proxibanque.entity.Conseiller', login: login, password: password };
        
        return this.http.post<any>(this.auth_url, jsonBody)
            .map(user => {
                if (user && user.token) {
                    localStorage.setItem('currentUser', JSON.stringify(user));
                }
                console.log(JSON.stringify(user));
                return user;
            });
    }

    logout() {
        localStorage.removeItem('currentUser');
    }
}