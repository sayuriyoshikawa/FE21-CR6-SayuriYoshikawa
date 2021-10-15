import { NONE_TYPE } from '@angular/compiler';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: any = [];
  constructor() { }

  addToCart(product: any){
    this.items.push(product);
 }

 getItems() {
   return this.items;
 }

 clearCart() {
   this.items = [];
   return this.items;
 }

 total() {
   let total: number = 0;
   for(let val of this.items){
     total = total + val.price
   }

   if(total >=200 && total < 500) {
    total = total*0.9;
    window.alert('You got 10% discount!');
   } else if (total >= 500){
     total = total*0.8;
     window.alert('You got 20% discount!');
   }

   return total;
 }
}
