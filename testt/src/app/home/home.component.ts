


import { Component, OnInit, ViewChild } from '@angular/core';
import { MdSidenav } from '@angular/material';
import {MdSnackBar} from '@angular/material';
@Component({
    templateUrl:'./home.componet.html',
    styleUrls:['./home.component.css']
})
export class HomeComponent implements OnInit {
      constructor(public snackBar: MdSnackBar) {}

@ViewChild("sidenav")
    side: MdSidenav;
    ngOnInit() {

        this.side.close();
        this.openSnackBar
       

    }

    openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }
}
