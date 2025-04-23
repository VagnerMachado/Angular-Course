import { Component } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlComponent } from "../../../shared/control/control.component";

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlComponent],
  templateUrl: './new-ticket.component.html',
  styleUrls: ['./new-ticket.component.css'],
  encapsulation: ViewEncapsulation.None,
})
  
export class NewTicketComponent {

}
