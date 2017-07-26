

import { Component, OnInit } from '@angular/core';
import { User } from '../shared/model/user';
import { UserService } from '../shared/services/user.service';
import { Router } from '@angular/router';

@Component({
    templateUrl:'./register.component.html'
})
export class RegisterComponent implements OnInit {
    constructor(private userService:UserService,private router:Router) { }
  user: User = { firstName: '', lastName: '', username: '', password: '' };

    ngOnInit() { }

     createUser() {
    this.userService.createUser(this.user).subscribe( data=> {
 console.log(data)
  this.router.navigate(['login']);
        
      })
     

      
  }
}