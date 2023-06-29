import { Foods } from "./food";

export class CartItem {
  quantity: number = 1;
  price: number;
  imageUrl: string; // Add the imageUrl property

  constructor(public food: Foods) {
    this.price = food?.price || 0;
    this.imageUrl = food?.imageUrl || ''; // Assign the imageUrl property
  }
}
