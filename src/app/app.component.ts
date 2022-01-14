import { Component } from '@angular/core';
import { User } from './model/user';
import { UserService } from './service/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'The good Angular programmer';

  userData!: User[];
  currentUser: User = new User();

  constructor(private userService: UserService) {
    this.userData = this.userService.list
  }

  onSelectClick(currentUser: User): void {
    this.currentUser = currentUser;
  }

  onUpdateClick(currentUser: User): void {
    this.userService.updateUser(currentUser);
  }

  onDeleteClick(currentUser: User): void {
    this.userService.removeUser(currentUser);
  }

}
