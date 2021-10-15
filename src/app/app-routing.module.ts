import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { BlogComponent } from './blog/blog.component';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { TravelComponent } from './travel/travel.component';

const routes: Routes = [
  {
    path:"", component: HomeComponent
  }, {
    path:"travel", component: TravelComponent
  }, {
    path: "products/:producId", component: TravelComponent
  }, {
    path: "cart", component: CartComponent
  }, {
    path: "blog", component: BlogComponent
  }, {
    path: "about-us", component: AboutUsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
