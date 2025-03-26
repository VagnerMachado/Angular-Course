import { Component, inject, Input, input } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { InvestmentService } from '../investment.service';


@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent {

  //another way to inject the service
  private investmentService = inject(InvestmentService);

  get results()
  {
    return this.investmentService.resultData;
  }

  // removing below so we use the service.
  // results = input <
  //   {
  //     year: number;
  //   interest: number;
  //   valueEndOfYear: number;
  //   annualInvestment: number;
  //   totalInterest: number;
  //   totalAmountInvested: number;
  //   }[]>();
  
  // option #1 to get input
  // @Input() results?:  {  // ? supress the error if results is not passed in
  //   year: number;
  //   interest: number;
  //   valueEndOfYear: number;
  //   annualInvestment: number;
  //   totalInterest: number;
  //   totalAmountInvested: number;
  // } [] //the square brackets indicate that it is an array of objects with the above properties
}
