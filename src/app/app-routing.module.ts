import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProfileComponent} from './componets/profile/profile.component';
import {AppComponent} from './app.component';
import {LoginComponent} from './componets/login/login.component';
import {ViewComponent} from './componets/view/view.component';
import {RegisterComponent} from './componets/register/register.component';
import {AuthguardService} from './services/authguard.service';
import {SearchComponent} from './componets/search/search.component';

const routes: Routes = [
  {path : '' , component : LoginComponent},
  {path : 'profile/:id' , component : ProfileComponent, canActivate : [AuthguardService]},
  {path : 'view' , component : ViewComponent, canActivate : [AuthguardService]},
  {path : 'search' , component : SearchComponent, canActivate : [AuthguardService]},
  {path : 'register' , component : RegisterComponent},
  {path : 'login' , component : LoginComponent},
  {path : '**' , component : AppComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
