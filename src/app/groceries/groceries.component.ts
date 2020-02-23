import { Component, OnInit } from '@angular/core';
import { GroceriesService } from './groceries.service';
import { Grocery } from './groceries';
import { BasketService } from '../basket/basket.service';

@Component({
  selector: 'app-groceries',
  templateUrl: './groceries.component.html'
})
export class GroceriesComponent implements OnInit {

  groceries: Array<Grocery>;
  loading = true;

  constructor (
    private service: GroceriesService,
    public basketService: BasketService
  ) { }

  ngOnInit(): void {
    this.getGroceries();
  }

  getGroceries(): void {
    this.service.getAllGroceries()
      .subscribe(
        (res) => { this.groceries = res},
        (err) => { console.log(err) }
      )
  }

  addToBasket(grocery: Grocery): void {
    this.basketService.addGroceryToBasket(grocery);
  }

}
