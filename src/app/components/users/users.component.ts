import { Component, Input,OnInit } from '@angular/core';
import { AddUserService } from '../../services/add-user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {
  users :string[]= [];
  constructor(private AddUserService: AddUserService) {

  };
  ngOnInit() {
    this.AddUserService.userEvent.subscribe((username:string)=>{this.users.push(username)})
  };
}
