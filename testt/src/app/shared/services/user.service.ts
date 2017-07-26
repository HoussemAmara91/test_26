import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { User } from '../model/user';

@Injectable()
export class UserService {

    private Url: string = 'http://localhost:1616/users';
    constructor(private http: Http) { }

   
    //create users
    createUser(user: User): Observable<User> {
        return this.http.post(`${this.Url}/add`, user)
            .map(res => res.json())
            .catch(this.handleError)
    }

    private handleError(err) {
        let errMessage: string;
        if (err instanceof Response) {
            let body = err.json() || '';
            let error = body.error || JSON.stringify(body);
            errMessage = `${err.status} - ${err.statusText || ''} ${error} `;
        }
        else {
            errMessage = errMessage ? errMessage : err.toString();
        }
        return Observable.throw(errMessage);
    }

 
}

