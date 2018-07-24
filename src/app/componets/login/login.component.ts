import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthenticationService} from '../../services/authentication.service';
import {Router} from '@angular/router';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  logged : boolean;
  login;
  form;
  constructor(fb: FormBuilder,private authService : AuthenticationService,private router: Router,title : Title) {
    title.setTitle("Home | Login");
    this.form = fb.group({
      email : ['',[Validators.required,Validators.email]],
      password : ['',[Validators.required]]
    });

  }

  ngOnInit() {
    this.logged = this.authService.authCheck();
    this.authService.auth.subscribe(data=>{
      this.logged = data!=null;
    });
  }

  submit(){
    this.authService.login(this.email.value, this.password.value).subscribe((response)=>{
      this.login = response;
      if(this.login.status==="Valid"){
        this.authService.initilizeAuth(response);
        this.router.navigate(['profile',this.login.id]);
      }else{
        this.form.setErrors({invalidCred : true});
      }
    });


  }

  get email(){
    return this.form.get('email');
  }

  get password(){
    return this.form.get('password');
  }
}
