import { CartItem } from "./CartItem";
import { PriceService } from "../services/PriceService";
import { isPriceAvailable } from "../utility/common";

export class Cart {
  items: CartItem[] = [];
  sum = 0;
  total = 0;
  tax = 0;

  async addItem(productName: string, quantity: number) {
    const productDetails = await PriceService.getPrice(productName);
    if (isPriceAvailable(productDetails)) {
      const itemIndex = this.items.findIndex(
        (item) => productName === item.name,
      );
      if (itemIndex !== -1) {
        this.items[itemIndex].quantity += quantity;
      } else {
        this.items.push(
          new CartItem(productName, quantity, productDetails.price),
        );
      }
    } else {
      console.log(productDetails.message);
    }
  }
  logDetails() {
    console.log("Subtotal=", this.sum.toFixed(2));
    console.log("Tax=", this.tax.toFixed(2));
    console.log("Total=", this.total.toFixed(2));
  }
  getTotalAmount() {
    this.items.forEach((item) => {
      this.sum += item.price * item.quantity;
      console.log("Cart contains", item.quantity, "x", item.name);
    });
    this.tax = (this.sum * 12.5) / 100;
    this.total = this.tax + this.sum;
    this.logDetails();
  }
}
