import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-input',
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
  initialInvestment = '0';
  expectedReturn = '5';
  annualInvestment = '0';
  duration = '12';

  onSubmit() {
    console.log(`Initial: ${this.initialInvestment}`);
    console.log(`Expected: ${this.expectedReturn}`);
    console.log(`Annual: ${this.annualInvestment}`);
    console.log(`Duration: ${this.duration}`);
  }
}
