import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Injectable()
export class AuthenticationService {
    private auth_url: string = 'http://localhost:8080/proxi_banque/auth';

    constructor(private http: HttpClient) { }

    auth(login: string, password: string) {
        console.log(`login service ${login} ${password}`);

        return this.http.post<any>(this.auth_url, 
                        { '@class': 'org.formation.proxibanque.entity.Conseiller', login: login, password: password })
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