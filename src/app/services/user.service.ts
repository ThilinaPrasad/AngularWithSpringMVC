import { Injectable } from '@angular/core';
import {UserData} from '../mockData/userdata.mock';
import {AuthenticationService} from './authentication.service';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {RequestOptions} from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = 'http://localhost:8080/user';
  headers = new HttpHeaders({'Content-Type':'application/json; charset=utf-8'});

  constructor(private authServive : AuthenticationService,private httpClient : HttpClient) { }

  getUser(id){
    if(this.authServive.authCheck()) {
      return this.httpClient.get(this.url+"/view/"+id);
    }
    return null;
  }

  getAllUsers(){
    return this.httpClient.get(this.url+"/view");
  }

  deleteUser(id){
    return this.httpClient.get(this.url+"/"+id);
  }

  checkEmail(email){
    return this.httpClient.get(this.url+"/email/"+email);
  }

  createUser(user){
    //console.log(user);
    return this.httpClient.post(this.url+"/create",JSON.stringify(user));
  }

}
