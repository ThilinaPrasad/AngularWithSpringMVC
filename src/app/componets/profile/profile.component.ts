import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {UserService} from '../../services/user.service';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user : any;
  constructor(private activatedRoutes : ActivatedRoute,private userService : UserService,private title : Title) {
  }

  ngOnInit() {
    this.activatedRoutes.paramMap.subscribe(params=>{
      this.userService.getUser(+params.get('id')).subscribe((response)=>{
        console.log(response);
        this.user = response;
        this.title.setTitle("Profile | "+this.user.firstname+" "+this.user.lastname);
      });
    });
  }

}
