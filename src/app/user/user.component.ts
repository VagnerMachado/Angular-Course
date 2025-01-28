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

  import {Component, Input, input, computed} from '@angular/core'; //Input allows for the use of setting a property from UI. app.component.html
// input: to be used with signal
// Input: to be used with @Input
@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  // note the required to indicate thru the app that this is a required field, will help catch errors while developing.
  @Input({required: true}) avatar!: string; // the ! is to stop TS complain about no initial value.
  @Input() name!: string; // the ! is to stop TS complain about no initial value.


  onSelectUser()
  {
    
  }	

  get imagePath()
  {
    return 'assets/users/' + this.avatar; //the () dereferences the signal aka getter
  }
}

