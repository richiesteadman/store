import { Injectable } from '@angular/core';
import { BasketItem } from './basket';
import { Grocery } from '../groceries/groceries';

@Injectable({
  providedIn: 'root'
})
export class BasketService {

  basket: Array<BasketItem> = [];

  constructor () { }

  alreadyInBasket(grocery: Grocery): boolean {
    return this.basket.some(item => {
      return item.grocery.name === grocery.name
    })
  }

  getItemFromBasket(grocery): BasketItem {
    return this.basket.find(i => {
      return i.grocery === grocery
    })
  }

  addGroceryToBasket(grocery: Grocery): void {
    if (this.alreadyInBasket(grocery)) {
      this.increaseBasketItemQuatity(grocery)
    } else {
      this.addNewItemToBasket(grocery)
    }
  }

  increaseBasketItemQuatity(grocery: Grocery): void {
    const item = this.getItemFromBasket(grocery);
    item.quantity += 1;
    item.cost = this.getTotalGroceryCost(grocery, item.quantity);
  }

  addNewItemToBasket(grocery: Grocery): void {
    this.basket.push({
      quantity: 1,
      grocery: grocery,
      cost: grocery.costPerUnit
    })
  }

  getTotalGroceryCost(grocery: Grocery, quantity): number {
    return +(grocery.costPerUnit * quantity).toFixed(2);
  }

  getBasketSize(): number {
    return this.basket.length;
  }

  getBasket(): Array<BasketItem> {
    return this.basket;
  }

  getBasketItemQuantity(grocery: Grocery): number {
    const item = this.getItemFromBasket(grocery);
    return item ? item.quantity : 0;
  }

  getBasketTotal(): number {
    let cost = 0;
    this.basket.forEach(i => {
      cost = cost + i.cost;
    })
    return +cost.toFixed(2)
  }

}
