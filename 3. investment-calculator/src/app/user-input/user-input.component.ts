import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { OutletContext } from '@angular/router';
import { InvestmentInput } from '../investment-input.model';


@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.css']
})
export class UserInputComponent {

  @Output() calculate = new EventEmitter<InvestmentInput>();
  enteredInitialInvestment : string = "100";
  enteredAnnualInvestment = "1000";
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
