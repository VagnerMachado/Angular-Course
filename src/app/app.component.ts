import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { UserComponent } from "./user/user.component"; //imports a componenet that can be used in this template / tempateURl
import { DUMMY_USERS } from '../dummy-users';
import { TasksComponent } from "./tasks/tasks.component";

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, UserComponent, TasksComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular-Course';
  users = DUMMY_USERS;
  selectedUserId! : string;

  get selectedUser() {
    return this.users.find(user => user.id === this.selectedUserId);
  }
  // method called from html when there is a click
  onSelectUser(id: string) {
    this.selectedUserId = id;
  }
}

