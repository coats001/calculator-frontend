import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Calculation} from './model/calculation';
import {CalculatorService} from './service/calculator-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calc-frontend';

  calculatorModel = new Calculation(1, 1, '-', null);

  calculations: Calculation[] = [];

  constructor(private calculatorService: CalculatorService) {
  }

  submit() {
    this.calculatorService.calculate(this.calculatorModel).subscribe(
      data => this.calculations = data,
      error => console.error('Error!', error)
    );
  }
}
