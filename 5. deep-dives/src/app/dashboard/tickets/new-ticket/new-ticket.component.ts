import { AfterViewInit, Component, ElementRef, EventEmitter, OnInit, Output, ViewChild, ViewChildren } from '@angular/core';
// Removed incorrect import of 'output' from 'tslib'
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
  
export class NewTicketComponent implements OnInit, AfterViewInit{
  

  // ---- OUTPUTS / SIGNALS EMIT DATA TO PARENTS. PARENTS MUST LISTEN
  // old way of doing it, but not preferred way
  // @Output() add = new EventEmitter<{title: string, text: string}>();
  
  //latest way is to use emitter. 
  @Output() add = new EventEmitter<{ title: string, text: string }>();
  
  // this lifecycle hook is called when the component is initialized/initializing
  ngOnInit(): void {
    console.log('NewTicketComponent initialized!');
  }
 
  //this lifecycle hook is called after the view has been fully initialized
  ngAfterViewInit(): void {
    //viewChild is initialized 
console.log("ngAfterview ran in New Ticket")  }

  // below is an alternative way to access the form element using ViewChild
  // @ViewChild('form') form!: HTMLInputElement;
  
  // formAgain = viewChild.required<ElementRef<HTMLFormElement>>("form"); // gives a signal.
  //instead of getting form element via method onSubmitTicket(titleElement: HTMLInputElement, textareaElement: HTMLTextAreaElement, form: HTMLFormElement) {
  // on can do ViewChild and then call
  // this.form?.NativeElement.reset(); // Reset the form after submission

  // @ViewChildren () ... // will store a list of elements, but not used in this example
  
  onSubmitTicket(titleElement: HTMLInputElement, textareaElement: HTMLTextAreaElement, form: HTMLFormElement) {
    console.log('Ticket submitted!');
    this.add.emit({ title: titleElement.value, text: textareaElement.value });
    //console.dir shows the properties of the object in the console
    console.dir(titleElement); // Log the title input element
    form.reset(); // Reset the form after submission
    //this.form?.nativeElement.reset(); // ViewChild Reset the form after submission
    //this.form().nativeElement.reset(); // signal Reset the form after submission

  }

}
