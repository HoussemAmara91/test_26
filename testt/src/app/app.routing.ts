import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders, Component } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { AuthrGuard } from './shared/guards/authGuard';


export const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'login', component: LoginComponent },

    { path: 'register', component: RegisterComponent },
     { path: 'home', 
     canActivate:[AuthrGuard],
     component: HomeComponent },


    


];

export const Routing: ModuleWithProviders = RouterModule.forRoot(routes);
