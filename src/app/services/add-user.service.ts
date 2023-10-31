import { Injectable,EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddUserService {
  userEvent = new EventEmitter<string>();
  addUser(username : string) {
    this.userEvent.emit(username);
  };
}
