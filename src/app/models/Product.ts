export interface Product {
    ISBN: number
    title: string;
    author: string;
    quantity: number;
    price: { currency: string, value: number, displayValue: string };
    rating: { rate: number, count: number };
    totalPrice: number;
  }