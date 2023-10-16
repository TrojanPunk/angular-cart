import { Component, EventEmitter, Input, Output } from '@angular/core';

interface PriceDetails {
  currency : string;
  value : number;
  displayValue : string;
}

interface BookDetails {
  title : string;
  author : string;
  price: PriceDetails;
  image: string;
}

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {
  @Input() bookDetails : BookDetails = {title: '', author: '', price: {currency: "", value: 0, displayValue: ""}, image: ''};
  @Input() title : string;
  @Input() price : PriceDetails;
  @Input() author : string;
  @Input() image : string;
  @Output() addProduct : EventEmitter<any> = new EventEmitter();

  constructor() {
    this.title = '';
    this.price = {currency: "", value: 0, displayValue: ""};
    this.author = '';
    this.image = '';
    this.bookDetails = {title: this.title, author: this.author, price: this.price, image: this.image}
  }

  // Use an Add to cart event emitter
  addToCart(bookDetails : BookDetails) {
    this.addProduct.emit(bookDetails);
  }
}