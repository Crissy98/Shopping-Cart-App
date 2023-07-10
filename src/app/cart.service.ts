import { Injectable } from '@angular/core';
import { Product } from './products';

@Injectable({
  providedIn: 'root'
})


export class CartService {
  //define an array that will store the items that were added into the cart
  items: Product[] = [];

  //this method adds in a product of type Product into the card
  addToCart(product: Product){
    this.items.push(product);
    console.log(product);
  }

  // this is a method that returns all the products in the card
  getItems():Product[]{
    return this.items;
  }

  //method that clears all the items in the card
  removeAllCartItems(){
    this.items=[];
    return this.items;
  }

  //method that removes a selected from the card based on the product.ids
  removeSelectedCartItem(productId: number): void {
    const index = this.items.findIndex(product => product.id === productId);
    if (index !== -1) {
      this.items.splice(index, 1);
    }
  }
}
