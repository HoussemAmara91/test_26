import { Component, ViewChild } from '@angular/core';
import { MdSidenav } from "@angular/material";
import { AuthService } from './shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private authService:AuthService,  private router: Router)
  {

  }
  credentials = { username: '', password: '' };
@ViewChild("sidenav")
    side: MdSidenav;
    ngOnInit() {

      
       

    }

    }

