// BELOW IS CODE COMMENTED OUT WHERE WE EXPLORED SIGNALS AND RANDOM USER ON CLICK
// AS WE WANT TO HAVE SEVERAL USERS, WE WILL REWORK THE CODE AND THIS SETUP NO LONGER MAKES SENSE.
// LEAVING IT HERE FOR REFERENCE

// import { signal, Component, computed } from '@angular/core';
// import { DUMMY_USERS } from '../../dummy-users'; //imports a list of dummy users that can be used in this component
// const RANDOM_USER = Math.floor(Math.random() * DUMMY_USERS.length);

// @Component({
//   selector: 'app-user',
//   imports: [],
//   templateUrl: './user.component.html',
//   styleUrl: './user.component.css'
// })
// export class UserComponent {
//   selectedUser = signal(DUMMY_USERS[RANDOM_USER]); //Now this variable can be used in the app.component.html file
//   imagePath = computed(() => 'assets/users/' + this.selectedUser().avatar); // proper way to use signal derefeence into calculation
//   // this will be used in the html file. calculations should be done in the component file
//   // --- As we are now using signals, we do not perform calculations with sinals here, insted we use computed.
//   // get imagePath()
//   // {
//   //   return 'assets/users/' + this.selectedUser().avatar; //the () dereferences the signal aka getter
//   // }
//   onSelectUser()
//   {
//     this.selectedUser.set(DUMMY_USERS[Math.floor(Math.random() * DUMMY_USERS.length)]); //signals have set() method
//     console.log('User selected: ' + this.selectedUser.name);
//   }
// }

// ======================  END OF SIGNALS AND RANDOM SINGLE USER ======================

// =========== INPUT WITH SIGNALS ===========

// import {Component, Input, input, computed} from '@angular/core'; //Input allows for the use of setting a property from UI. app.component.html
// // input: to be used with signal
// // Input: to be used with @Input
// @Component({
//   selector: 'app-user',
//   imports: [],
//   templateUrl: './user.component.html',
//   styleUrl: './user.component.css'
// })
// export class UserComponent {
//    //-- Notee this is to be used with input for signal. Alternative from above
//   // big one: input signals are read only and cannot be called set() as in above example
//   avatar = input<string>(); // specify the label in html ' avatar' and type string
//   name = input<string>(); // specify the label in html ' name' and type string
//   onSelectUser()
//   {  
//   }	
//   imagePath = computed(() => 'assets/users/' + this.avatar()); // proper way to use signal derefeence into calculation

  // ======================  END OF INPUT WITH SIGNALS ======================

  // ======================  START OF INPUT WITH @INPUT ======================

  import {Component, Input, input, computed, Output, EventEmitter, output} from '@angular/core'; //Input allows for the use of setting a property from UI. app.component.html
  import { User } from '../user/user.model';
import { CardComponent } from "../shared/card/card.component"; //imports a list of dummy users that can be used in this component
// input: to be used with signal, output for emitter
// Input / Output: to be used with @Input

//defining a user 'object' type: CAN BE DONE HERE BUT BETTER IN A SEPARATE FILE IN SAME FOLDER USER.MODEL.TS
// type User = {
//   id: string;
//   name: string;
//   avatar: string;
// };

//-- type vs interface

// interface User {
//   id: string;
//   name: string;
//   avatar: string;
// };

@Component({
  selector: 'app-user',
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  
  // note the required to indicate thru the app that this is a required field, will help catch errors while developing.
  // @Input({required: true}) avatar!: string; // the ! is to stop TS complain about no initial value.
  // @Input() name!: string; // the ! is to stop TS complain about no initial value.
  // @Input({ required: true }) id!: string;

  @Input({ required: true }) user!: User;
  
  @Input({required: true}) selected! : boolean; // this is a boolean value that will be used in the app.component.html file
  //output is used to emit events to the parent component
  @Output() select = new EventEmitter<string>(); //<> is optional but good practice to check type emitted
  // this is the event emitter that will be used in the app.component.html file
  // select = output<string>(); // used with signals, need to pass the type of data to be emitted
  clickOnUser() // this is the methods bound to the button.
  {
    this.select.emit(this.user.id) // id created when page loads.
  }	

  get imagePath()
  {
    return 'assets/users/' + this.user.avatar; //the () dereferences the signal aka getter
  }
}

