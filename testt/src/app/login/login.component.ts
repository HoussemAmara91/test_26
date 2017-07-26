





import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/services/auth.service';
import { Subject } from 'rxjs/Subject';

@Component({
    templateUrl:'./login.component.html',

    styleUrls:['./login.component.css']
})
export class LoginComponent implements OnInit {
  credentials={username:'',password:''}
  successMessage:string;
  errorMessage:string=''
    constructor(private router:Router,private authServie:AuthService) { }

    ngOnInit() { }
register()
{
  console.log('oki')
    this.router.navigate(['register']);
}

login()
{
  /*this.authServie.login(this.credentials.username,this.credentials.password).subscribe(
    data=>{
      console.log(data)
    },
    err=>{
      console.error(err)
    }
  )
  */

  this.router.navigate(['home']);
}


    
}