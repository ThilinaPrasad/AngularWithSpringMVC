import {Component, Input, OnInit} from '@angular/core';
import {AuthenticationService} from '../../services/authentication.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

logged : boolean;
userId : any;
  constructor(private authService : AuthenticationService,private router : Router) {
    this.logged = authService.authCheck();
      this.userId = authService.authGet();
      authService.auth.subscribe((data)=>{
      this.logged = data!=null;
      this.userId = data;
    });

  }

  ngOnInit() {
  }

  logOut(){
    this.authService.logout();
    this.logged = this.authService.destroyAuth();
    this.router.navigate(['']);
  }

}
