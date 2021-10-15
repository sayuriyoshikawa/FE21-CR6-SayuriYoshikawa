import { Component, OnInit } from '@angular/core';
import { products } from '../products';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'travel',
  templateUrl: './travel.component.html',
  styleUrls: ['./travel.component.css']
})
export class TravelComponent implements OnInit {
  products = products;
  productId: any;
  product: any;
  constructor(private route: ActivatedRoute, private cartService: CartService) { }
  addToCart(product: any) {
    window.alert('Your travel has been added to the cart! Please check "Your trip."');
    this.cartService.addToCart(product);
  }
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      let id : any = params.get("productId");
      this.product = products[id];
    });
  }

}