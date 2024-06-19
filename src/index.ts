import { Cart } from "./model/Cart";

const cart = new Cart();
await cart.addItem("cornflakes", 2);
await cart.addItem("weetabix", 1);
cart.getTotalAmount();
