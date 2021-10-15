import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CartService } from '../cart.service';
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
    name: new FormControl("", Validators.required),
    address: new FormControl("", Validators.required),
    check: new FormControl("", Validators.required)
  });
  
  constructor(private cartService: CartService) {
   }

  ngOnInit(): void {
    this.items = this.cartService.getItems();
    this.sum = this.cartService.total();
  }

  onSubmit(customerData: any) {
    if(this.checkoutForm.valid){
    console.warn("Your order has been submitted", customerData);
    window.alert('Thank you very much! Your order has been submitted.');
    this.items = this.cartService.clearCart();
    this.checkoutForm.reset();
    this.sum = 0;
  }
  }
}
