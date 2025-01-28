import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { UserComponent } from "./user/user.component"; //imports a componenet that can be used in this template / tempateURl
import { DUMMY_USERS } from '../dummy-users';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, UserComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular-Course';
  users = DUMMY_USERS;
}

