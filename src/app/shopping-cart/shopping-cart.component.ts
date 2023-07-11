import { Component} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})


export class ShoppingCartComponent{

  items = this.cartService.getItems();

  constructor(
    private route: ActivatedRoute,private cartService: CartService) {}
}

