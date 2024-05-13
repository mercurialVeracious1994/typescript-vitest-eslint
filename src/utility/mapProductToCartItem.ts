import {PriceResponse} from "../response/PriceResponse";
import {Product} from "../model/Product";

export const mapPriceToProduct = (productDetails: PriceResponse): Product => {
    return new Product(productDetails.title, productDetails.price);
}
