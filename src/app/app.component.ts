import {Component} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {LocalStorageService} from 'angular-web-storage';
import {AuthenticationService} from './services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor() {
  }


}
