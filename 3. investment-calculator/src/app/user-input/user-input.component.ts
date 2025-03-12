import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { OutletContext } from '@angular/router';


@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.css']
})
export class UserInputComponent {

  @Output() calculate = new EventEmitter<{enteredInitialInvestment: number, enteredExpectedReturn: number, enteredAnnualInvestment: number, duration : number}>();
  enteredInitialInvestment : string = "0";
  enteredAnnualInvestment = "0";
  enteredExpectedReturn = "5";
  enteredDuration = "10";

  formSubmit()
  {
    console.log("Form Submitted") 
    console.log(this.enteredInitialInvestment + " initial")
    console.log(this.enteredAnnualInvestment + " annual")
    console.log(this.enteredDuration + " duration ")
    console.log(this.enteredExpectedReturn + " expected")
    this.calculate.emit({
      //the  + in front of it transforms from string to number
      enteredInitialInvestment: +this.enteredInitialInvestment,
      enteredAnnualInvestment: +this.enteredAnnualInvestment,
      enteredExpectedReturn: +this.enteredExpectedReturn,
      duration: +this.enteredDuration
    });
  }
}
