import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Grocery } from './groceries';

@Injectable({
  providedIn: 'root'
})
export class GroceriesService {

  mockGroceries: Array<Grocery> = [
    { name: 'Peas', unit: 'bag', costPerUnit: 0.95, image: 'https://www.publicdomainpictures.net/pictures/30000/nahled/green-peas-background.jpg' },
    { name: 'Eggs', unit: 'dozen', costPerUnit: 2.1, image: 'https://www.publicdomainpictures.net/pictures/300000/nahled/brown-eggs-in-a-basket-top-view.jpg' },
    { name: 'Milk', unit: 'bottle', costPerUnit: 1.3, image: 'https://cdn.pixabay.com/photo/2018/03/16/16/43/milk-3231775_960_720.jpg' },
    { name: 'Beans', unit: 'can', costPerUnit: 0.73, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ5skfg5HbZKg4d5IS4G443Eo4tkbbQ5EMqKl_Vb8guBDsetpoZ' }
  ]

  constructor() { }

  getAllGroceries(): Observable<any> {
    return of(this.mockGroceries)
  }

}
