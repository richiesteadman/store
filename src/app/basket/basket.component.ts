import { Component, OnInit } from '@angular/core';
import { BasketService } from './basket.service';
import { ExchangeService } from '../exchange/exchange.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html'
})
export class BasketComponent implements OnInit {

  exchangeRates = {};
  currencies: string[] = [];
  selectedCurrency = 'GBP';

  loading = true;

  constructor (
    public basketService: BasketService,
    private exchangeService: ExchangeService
  ) { }

  ngOnInit(): void {
    this.getExchangeRates()
  }

  getExchangeRates(): void {
    this.exchangeService.getExchangeRates()
      .subscribe(
        (res) => {
          this.exchangeRates = res['rates'];
          this.setCurrencies(res['rates']);
          this.loading = false;
        },
        (err) => { console.log(err) }
      )
  }

  setCurrencies(rates): void {
    this.currencies = Object.keys(rates);
  }

  getConvertedBasketTotal(): number {
    const cost = this.basketService.getBasketTotal();
    const rate = this.exchangeRates[this.selectedCurrency];
    return +(cost * rate).toFixed(2)
  }

}
