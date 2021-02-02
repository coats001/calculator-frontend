import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Calculator} from './model/calculator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calc-frontend';
  url = 'http://localhost:8080/';
  calculatorModel = new Calculator(1, 1, '-');

  submit(calculator: NgForm) {
    console.log('Form submitted', calculator);
  }
}
