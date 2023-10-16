import { Component, OnInit } from '@angular/core';
import data from '../assets/data/info.json';
import { Product } from './models/Product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-cart';
  books = data.books; 
  total: number = 0;

  cartItems: Product[] = []

  // Insert the item by finding and it using ISBN id
  insertProduct(e: Product) : void {
    const cartProduct = this.cartItems.find(p => p.ISBN === e.ISBN);
    if (!cartProduct) {
      this.cartItems.push({...e, quantity: 1, totalPrice: e.price.value});
    }

    else {
      cartProduct.quantity++;
      cartProduct.totalPrice = cartProduct.quantity * cartProduct.price.value
    }

    this.total = this.calculateTotalPrice();
  }

  // Remove the item from the cart by finding the index and deconstructing the object at that index
  removeItems(ISBN: number) : void {
    const itemIndex = this.cartItems.findIndex((item) => item.ISBN === ISBN);
    const [removedItem] = this.cartItems.splice(itemIndex, 1);
  
    if (removedItem) {
      this.total -= removedItem.price.value;
    }

    this.total = this.calculateTotalPrice();
  }

  // Manipulate the total price of a single item
  manipulateQuantity() : void {
    this.cartItems.forEach((item) => { 
      item.totalPrice = item.quantity * item.price.value;
    });

    this.total = this.calculateTotalPrice();
  }

  // Function used to calculate the total price of all the items
  calculateTotalPrice(): number { 
    return this.cartItems.reduce((sum, item) => sum + item.totalPrice, 0); 
  }
}


