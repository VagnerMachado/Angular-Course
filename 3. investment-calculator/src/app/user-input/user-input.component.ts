import { Component, EventEmitter, output, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { OutletContext } from '@angular/router';
import { InvestmentInput } from '../models/investment-input.model';
import { InvestmentService } from '../investment.service';


@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.css']
})
export class UserInputComponent {

  // used with @Input @Output
  // @Output() calculate = new EventEmitter<InvestmentInput>();

  // used with signal, removed as we use sevrvice now
  // calculate = output<InvestmentInput>()

  // usedd with @Input @Output
  // enteredInitialInvestment : string = "100";
  // enteredAnnualInvestment = "1000";
  // enteredExpectedReturn = "5";
  // enteredDuration = "10";

  // used with signal
  enteredInitialInvestment = signal("100");
  enteredAnnualInvestment = signal("1000");
  enteredExpectedReturn = signal("5");
  enteredDuration = signal("10");

  // inject the service
  constructor(private investmentService: InvestmentService) { }
  
  // using the service
  formSubmit()
  {
    console.log("Form Submitted") 
    console.log(this.enteredInitialInvestment + " initial")
    console.log(this.enteredAnnualInvestment + " annual")
    console.log(this.enteredDuration + " duration ")
    console.log(this.enteredExpectedReturn + " expected")
    this.investmentService.calculateInvestmentResults({
      //the  + in front of it transforms from string to number - setup for @INput @Output
      // enteredInitialInvestment: +this.enteredInitialInvestment,
      // enteredAnnualInvestment: +this.enteredAnnualInvestment,
      // enteredExpectedReturn: +this.enteredExpectedReturn,
      // duration: +this.enteredDuration

      //setup to emit the value from signal
      enteredInitialInvestment: +this.enteredInitialInvestment(),
      enteredAnnualInvestment: +this.enteredAnnualInvestment(),
      enteredExpectedReturn: +this.enteredExpectedReturn(),
      duration: +this.enteredDuration()
    });

    //reset the form after submit
    this.enteredInitialInvestment.set("100");
    this.enteredAnnualInvestment.set("1000");
    this.enteredExpectedReturn.set("5");
    this.enteredDuration.set("10");
  }
}
