import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calc-frontend';
  url = 'http://localhost:8080/';

  submit(calculator: NgForm) {
    console.log('Form submitted', calculator);
  }
}
