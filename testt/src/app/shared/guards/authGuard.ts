
import { Injectable } from '@angular/core';
import { CanActivate, Router, CanActivateChild } from '@angular/router';
import { AuthService } from '../services/auth.service';
@Injectable()
export class AuthrGuard implements CanActivate {

    constructor(private auth: AuthService, private router: Router) {

    }
    canActivate() {

        if (window.localStorage.getItem('auth_token')) {

            return true;

        }
        else return false;
    }
}