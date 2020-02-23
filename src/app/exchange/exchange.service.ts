import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ExchangeService {

  constructor (
    private http: HttpClient
  ) { }

  getExchangeRates(): Observable<any> {
    const url = 'https://api.exchangeratesapi.io/latest?base=GBP';
    return this.http.get(url)
  }

}
