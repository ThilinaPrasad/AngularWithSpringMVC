import {EventEmitter, Injectable, Output} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {LocalStorageService} from 'angular-web-storage';
import {UserData} from '../mockData/userdata.mock';
import {e, p} from '@angular/core/src/render3';
import {UserService} from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  auth = new EventEmitter();
  url = 'http://localhost:8080/user';
  headers = new HttpHeaders({'Content-Type':'application/json; charset=utf-8'});

  constructor(private httpClient: HttpClient,private storageService : LocalStorageService) {

  }

  login(email : string,password: string){
    let creds = {email : email , password : password};
   return this.httpClient.post(this.url+"/login",JSON.stringify(creds));
  }

  logout(){
    return this.httpClient.get(this.url+"/logout").subscribe();
  }

initilizeAuth(user){
    this.auth.emit(user.id);
  this.storageService.set('authKey',user.id);
  return true;
}

authCheck(){
  return this.storageService.get('authKey')!=null;
}

authGet(){
  return this.storageService.get('authKey');
}

destroyAuth(){
    this.auth.emit(null);
    this.storageService.remove('authKey');
    return false;
}

}
