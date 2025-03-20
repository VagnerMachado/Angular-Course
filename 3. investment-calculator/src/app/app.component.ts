import { Component, signal } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserInputComponent } from './user-input/user-input.component';
import type { InvestmentInput } from './models/investment-input.model';
import { InvestmentResultsComponent } from './investment-results/investment-results.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, UserInputComponent, InvestmentResultsComponent],
  standalone: true,
  templateUrl: './app.component.html'
})
export class AppComponent {

  //this  data will hold results of below method - used with @Input @Output
  // resultData?: {
  //   year: number;
  //   interest: number;
  //   valueEndOfYear: number;
  //   annualInvestment: number;
  //   totalInterest: number;
  //   totalAmountInvested: number;
  // }[];

  //this data will hold results of below method - used with signal
 
// moved out because now it is in service 
  // resultData = signal <{
  //   year: number;
  //   interest: number;
  //   valueEndOfYear: number;
  //   annualInvestment: number;
  //   totalInterest: number;
  //   totalAmountInvested: number;
  // }[] | undefined>(undefined);


  // moved out because now it is in service
  // onCalculateInvestmentResults(data: InvestmentInput) {
    
  //   //destructure the data object
  //   const { enteredInitialInvestment, enteredExpectedReturn, duration, enteredAnnualInvestment } = data;

  //   const annualData = [];
  //   let investmentValue = enteredInitialInvestment;
  
  //   for (let i = 0; i < duration; i++) {
  //     const year = i + 1;
  //     const interestEarnedInYear = investmentValue * (enteredExpectedReturn / 100);
  //     investmentValue += interestEarnedInYear + enteredAnnualInvestment;
  //     const totalInterest =
  //       investmentValue - enteredAnnualInvestment * year - enteredInitialInvestment;
  //     annualData.push({
  //       year: year,
  //       interest: interestEarnedInYear,
  //       valueEndOfYear: investmentValue,
  //       annualInvestment: enteredAnnualInvestment,
  //       totalInterest: totalInterest,
  //       totalAmountInvested: enteredInitialInvestment + enteredAnnualInvestment * year,
  //     });
  //   }
  //   console.log(annualData)
  //   // this.resultData = annualData; // Used with @Input @Output

  //   this.resultData.set(annualData); // Used with signal
  // }
}
