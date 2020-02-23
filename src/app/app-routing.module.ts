import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { GroceriesComponent } from './groceries/groceries.component';
import { BasketComponent } from './basket/basket.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'groceries', component: GroceriesComponent },
  { path: 'basket', component: BasketComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
