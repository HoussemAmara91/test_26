
import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
@Injectable()
export class AuthService {
    private authUrl = "http://localhost:1616/users";
    private logedin: boolean = false;
    constructor(private http: Http, private router: Router) {
        this.logedin= !!localStorage.getItem('auth_token')
    }
   
  
    isLoggedIn()
    {
        return this.logedin;
    }

    login(username :string , password:string):Observable<String>
    {
        return this.http.post(`${this.authUrl}/login`,{username,password})
        .map(res=>res.json())
        .do(
            res=>{
                if (res.token) localStorage.setItem('auth_token',res.token);
            }
        )
        .catch(this.handleError)
    }
    //check login 

    checkLogin() {
        return localStorage.getItem('auth_token');
       
    }
    //logout
    logout() {
        localStorage.removeItem('auth_token');
        localStorage.removeItem('curr');
    }

    private handleError(err) {
        let errMessage: string;
        if (err instanceof Response) {
            let body = err.json() || '';
            let error = body.error || JSON.stringify(body);
            errMessage = `${err.status} - ${err.statusText} || ''} ${error} `;
        }
        else {
            errMessage = errMessage ? errMessage : err.toString();
        }
        return Observable.throw(errMessage);
    }


}