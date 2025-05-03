import { Component, ElementRef, viewChild, ViewChild, ViewChildren } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlComponent } from "../../../shared/control/control.component";
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrls: ['./new-ticket.component.css'],
  encapsulation: ViewEncapsulation.None,
})
  
export class NewTicketComponent {

  // below is an alternative way to access the form element using ViewChild
  // @ViewChild('form') form!: HTMLInputElement;
  
  // formAgain = viewChild.required<ElementRef<HTMLFormElement>>("form"); // gives a signal.
  //instead of getting form element via method onSubmitTicket(titleElement: HTMLInputElement, textareaElement: HTMLTextAreaElement, form: HTMLFormElement) {
  // on can do ViewChild and then call
  // this.form?.NativeElement.reset(); // Reset the form after submission

  // @ViewChildren () ... // will store a list of elements, but not used in this example
  
  onSubmitTicket(titleElement: HTMLInputElement, textareaElement: HTMLTextAreaElement, form: HTMLFormElement) {
    console.log('Ticket submitted!');
    //console.dir shows the properties of the object in the console
    console.dir(titleElement); // Log the title input element
    form.reset(); // Reset the form after submission
    //this.form?.nativeElement.reset(); // ViewChild Reset the form after submission
    //this.form().nativeElement.reset(); // signal Reset the form after submission

  }

}
