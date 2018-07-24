import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './componets/navbar/navbar.component';
import { LoginComponent } from './componets/login/login.component';
import { RegisterComponent } from './componets/register/register.component';
import { ProfileComponent } from './componets/profile/profile.component';
import { ViewComponent } from './componets/view/view.component';
import { SearchComponent } from './componets/search/search.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {AuthenticationService} from './services/authentication.service';
import {LocalStorageService} from 'angular-web-storage';
import {AuthguardService} from './services/authguard.service';
import {MaterializeModule} from 'angular2-materialize';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    ViewComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterializeModule
  ],
  providers: [AuthenticationService,LocalStorageService,AuthguardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
