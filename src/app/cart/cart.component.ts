import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { CartService } from '../cart.service';
import { products } from '../products';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
items: any;
sum: any;
product:any;
  checkoutForm= new FormGroup({
    name: new FormControl(""),
    address: new FormControl("")
  });

  constructor(private cartService: CartService) {
   }

  ngOnInit(): void {
    this.items = this.cartService.getItems();
    this.sum = this.cartService.total();
  }

  onSubmit(customerData: any) {
    console.warn("Your order has been submitted", customerData);

    this.items = this.cartService.clearCart();
    this.checkoutForm.reset();
  }
}
