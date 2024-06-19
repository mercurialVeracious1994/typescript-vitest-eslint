import { PriceResponse } from "../response/PriceResponse";

export const isPriceAvailable = (
  productDetails: PriceResponse | Error,
): productDetails is PriceResponse => {
  return "price" in productDetails;
};
