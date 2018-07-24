import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  users : any;
  keyword : string;
  constructor(private userService: UserService,title : Title) {
    title.setTitle("Search Users");
  }

  ngOnInit() {
  }

  searchClear(){
    this.keyword = '';
  }
}
