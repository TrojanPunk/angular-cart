import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../models/Product';
@Component({
  selector: 'app-card-items',
  templateUrl: './card-items.component.html',
  styleUrls: ['./card-items.component.css']
})
export class CardItemsComponent {
  @Input() item: Product | undefined;
  @Output() removeFromCart: EventEmitter<number> = new EventEmitter();
  @Output() quantityManipulate : EventEmitter<number> = new EventEmitter();

  // Remove an item using the event emitter
  removeProduct(id: number) {
    this.removeFromCart.emit(id);
  }

  decreaseQuantity(item: Product) : void {
    if (item.quantity === 1) {
      this.removeProduct(item.ISBN);
    } 

    else {
      item.quantity--;
      item.totalPrice = item.quantity * item.price.value;
      this.quantityManipulate.emit(item.quantity);
    }
  }

  increaseQuantity(item: Product) : void {
    item.quantity++;
    this.quantityManipulate.emit(item.quantity);
  }
}
