import { Injectable } from "@angular/core";
import { InvestmentInput } from "./models/investment-input.model";

@Injectable({
    providedIn: 'root'
})
export class InvestmentService {

    resultData? : {
        year: number;
        interest: number;
        valueEndOfYear: number;
        annualInvestment: number;
        totalInterest: number;
        totalAmountInvested: number;
    }[];

    calculateInvestmentResults(data: InvestmentInput) {
    
        //destructure the data object
        const { enteredInitialInvestment, enteredExpectedReturn, duration, enteredAnnualInvestment } = data;
    
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
        // this.resultData = annualData; // Used with @Input @Output
        
        this.resultData = annualData; // Used with signal
      }
}