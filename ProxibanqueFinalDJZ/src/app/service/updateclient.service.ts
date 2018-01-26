import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';



@Injectable()
export class UpdateclientService {

  constructor(private httpService: Http) { }
//  getCli(): Observable<any> {
//    console.log('Here I have the list');
//    return this.httpService.get('http://localhost:8080/SimpleMavenJPAWeb/displayClients')
//      .map((res: Response) => res.json())
//      .catch((error: any) => Observable.throw('Big problem!'));
//
//  }


}
