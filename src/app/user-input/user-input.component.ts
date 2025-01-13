import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import type { InvestmentInput } from '../investment-input.model';

@Component({
  selector: 'app-user-input',
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
  @Output() calculate = new EventEmitter<InvestmentInput>();
  initialInvestment = '0';
  expectedReturn = '5';
  annualInvestment = '0';
  duration = '10';

  onSubmit() {
    this.calculate.emit({
      initialInvestment: +this.initialInvestment,
      expectedReturn: +this.expectedReturn,
      annualInvestment: +this.annualInvestment,
      duration: +this.duration,
    });
  }
}
