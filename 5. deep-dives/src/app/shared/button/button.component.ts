import { Component } from '@angular/core';

@Component({
  // this here means this will be applied to buttons that have the apButton property set
  selector: 'button[appButton]', // or .appButton//https://angular.dev/guide/components/selectors
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {

}
