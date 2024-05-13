import {PriceResponse} from "./response/PriceResponse";
import {Product} from "./model/Product";
import {availableProducts} from "./datasource/Products";
import {PriceService} from "./services/PriceService";
import {mapPriceToProduct} from "./utility/mapProductToCartItem";
import {Cart} from "./model/Cart";

export const productList: Product[] = [];

for(let i = 0; i < availableProducts.length;i++) {
  const productPrice: PriceResponse = await PriceService.getPrice(availableProducts[i]);
  console.log(productPrice, "productPrice");
  const productDetail = mapPriceToProduct(productPrice);
  productList.push(productDetail)
}

const cart = new Cart();
cart.addItem('cheerios', 2);
cart.addItem('cheerios', 1);
console.log(cart.getTotalAmount(), "total");
