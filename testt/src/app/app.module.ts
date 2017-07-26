import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import 'rxjs/add/operator/map';
import { AppComponent } from './app.component';
import { FormsModule } from "@angular/forms";
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch'
import { MaterialModule } from '@angular/material';
import 'hammerjs';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { AuthService } from './shared/services/auth.service';
import { UserService } from './shared/services/user.service';
import { HttpModule, JsonpModule } from '@angular/http';
import { Routing } from './app.routing';
import { AuthrGuard } from './shared/guards/authGuard';

@NgModule({
  declarations: [
    AppComponent,LoginComponent,RegisterComponent,HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MaterialModule,
    HttpModule,
    Routing
  ],
  providers: [AuthService,UserService,AuthrGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
