import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../services/authentication.service';
import {AbstractControl, FormBuilder, FormControl, Validators} from '@angular/forms';
import {RegValidations} from './regValidations';
import {UserService} from '../../services/user.service';
import {Router} from '@angular/router';
import {e} from '@angular/core/src/render3';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  logged : boolean;
  form;
  user;
  status;
  constructor(private authService : AuthenticationService,private formBuilder : FormBuilder,private userService : UserService,private router : Router) {
    this.form = formBuilder.group({
      firstname :['',[Validators.required,RegValidations.whiteSpaces]],
      lastname : ['',[Validators.required,RegValidations.whiteSpaces]],
      email : ['',[Validators.required,Validators.email]],
      address : ['',[Validators.required]],
      password : ['',[Validators.required,Validators.minLength(8),Validators.maxLength(16)]],
      cmf_password : ['',[Validators.required]]
    },{validator: RegValidations.cmfPassCheck});
  }

  ngOnInit() {
    this.logged = this.authService.authCheck();
    this.authService.auth.subscribe(data=>{
      this.logged = data!=null;
    });
  }

  submit(){
    var user = {firstname : this.firstname.value , lastname: this.lastname.value,email : this.email.value, address : this.address.value, password : this.cmf_password.value};
    this.userService.createUser(user).subscribe((response)=>{
      this.user = response;
      if(this.user.id==="available"){
        this.email.setErrors({'available':true});
      }else if(this.user.id==="none"){
        this.form.setErrors({"regError":true});
      }else {
        this.authService.initilizeAuth(this.user);
        this.router.navigate(['profile',this.user.id]);
      }
    });
  }



  //Properties
  get firstname(){
    return this.form.get('firstname');
  }
  get lastname(){
    return this.form.get('lastname');
  }
  get email(){
    return this.form.get('email');
  }
  get address(){
    return this.form.get('address');
  }
  get password(){
    return this.form.get('password');
  }
  get cmf_password(){
    return this.form.get('cmf_password');
  }

}
