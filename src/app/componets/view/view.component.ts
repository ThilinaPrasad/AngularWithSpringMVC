import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {UserService} from '../../services/user.service';
import {Title} from '@angular/platform-browser';
import {toast} from 'angular2-materialize';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css'],
})
export class ViewComponent implements OnInit {

  users : any;
  keyword : string;
  constructor(private userService: UserService,title : Title) {
    title.setTitle("View | All Users");
  }

  ngOnInit() {
    this.userService.getAllUsers().subscribe((response)=>{
      this.users = response;
    });
  }

  deleteUser(user){
    let index = this.users.indexOf(user);
    this.users.splice(index,1);
    this.userService.deleteUser(user.id).subscribe(()=>{
      toast('User '+user.firstname+' deleted successfully!',2000);

    },(error) => {
      toast('Error happend while deleting user data!',2000);
      this.users.splice(index,0,user);
      console.log(error);
    });
  }

  filterUsers() {
    var filter, table, tr, td, i;
    filter = this.keyword.toUpperCase();
    table = document.getElementById("userData");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0];
      if (td) {
        if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  }

  searchClear(){
    this.keyword = '';
    this.filterUsers();
  }
}
