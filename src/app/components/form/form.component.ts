import { Component } from '@angular/core';
import { User } from './structure.user';
import { AddUserService } from '../../services/add-user.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  username = 'string';

  constructor(private AddUserService : AddUserService) {

  }
  submitForm() {
    this.AddUserService.addUser(this.username);
  };
}
