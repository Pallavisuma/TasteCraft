import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Cart } from 'src/app/shared/models/Cart';
import { CartItem } from 'src/app/shared/models/cartItem';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart!: Cart;

  constructor(private cartService: CartService) {
    this.cartService.getCartObservable().subscribe((cart) => {
      this.cart = cart;
    });
  }

  ngOnInit(): void {
  }
  removeFromCart(cartItem: CartItem) {
    if (cartItem.food && cartItem.food.id !== undefined) {
      this.cartService.removeFromCart(cartItem.food.id.toString());
    }
  }
  
  
  

  changeQuantity(cartItem: CartItem, event: any): void {
    const quantity = parseInt(event.target.value, 10);
    this.cartService.changeQuantity(cartItem.food.id.toString(), quantity);
  }
}
