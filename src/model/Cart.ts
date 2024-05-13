import {CartItem} from "./CartItem";
import {productList} from "../index";

export class Cart {
    items: CartItem[]

    constructor() {
        this.items = [];
    }

    addItem(productName: string, quantity: number) {
        const product = productList.find(product => product.name.toLowerCase() === productName.toLowerCase());
        if (product) {
            const itemIndex = this.items.findIndex(item => item.name);
            if (itemIndex !== -1) {
                this.items[itemIndex].quantity += quantity;
            } else {
                this.items.push(new CartItem(productName, quantity, product.price));
            }
        }
    }

    getTotalAmount(): number {
        let sum = 0;
        this.items.forEach(item => sum += item.price * item.quantity);
        return sum;
    }
}
