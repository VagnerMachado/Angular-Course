import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserInputComponent } from './user-input/user-input.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, UserInputComponent],
  standalone: true,
  templateUrl: './app.component.html',
})
export class AppComponent {
  onCalculateInvestmentResults(data: { enteredInitialInvestment: number, enteredExpectedReturn: number, enteredAnnualInvestment: number, duration : number }) {
    const { enteredInitialInvestment, enteredExpectedReturn, duration, enteredAnnualInvestment  } = data;
    const annualData = [];
    let investmentValue = enteredInitialInvestment;
  
    for (let i = 0; i < duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (enteredExpectedReturn / 100);
      investmentValue += interestEarnedInYear + enteredAnnualInvestment;
      const totalInterest =
        investmentValue - enteredAnnualInvestment * year - enteredInitialInvestment;
      annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: enteredAnnualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested: enteredInitialInvestment + enteredAnnualInvestment * year,
      });
    }
  console.log(annualData)
  }
}
