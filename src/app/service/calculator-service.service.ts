import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Calculation} from '../model/calculation';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  url = 'http://localhost:8080/calculate';

  constructor(private http: HttpClient) {

  }

  calculate(calculation: Calculation) {
    return this.http.post<any>(this.url, calculation);
  }
}
