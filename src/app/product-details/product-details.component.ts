import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, products } from '../products';
import {Location} from '@angular/common';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})


export class ProductDetailsComponent implements OnInit {
  product: Product | undefined;
  /* ... */
  constructor(
    private route: ActivatedRoute,
    private _location: Location,
    private cartService: CartService
    ) {}

  backClicked() {
    this._location.back();
  }

  ngOnInit() {
    // First get the product id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));
    console.log(productIdFromRoute);

    // Find the product that correspond with the id provided in route.
    this.product = products.find(
      (product) => product.id === productIdFromRoute
    );
  }

  //addToCart method that uses the shopping cart service to add the item into the shopping cart

  addItemToCart(product:Product){
    this.cartService.addToCart(product);
    window.alert('Product added into the shopping cart!');
    console.log('Product has been added into your shopping cart');
  }

  getCartItems(){
    return this.cartService.getItems();
  }
}
