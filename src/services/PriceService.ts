import { PriceResponse } from "../response/PriceResponse";

const BASEURL = "https://equalexperts.github.io/";

const getPrice = async (
  productName: string,
): Promise<PriceResponse | Error> => {
  const url = BASEURL + `backend-take-home-test-data/${productName}.json`;
  let error = new Error("Something went wrong");
  let response;
  try {
    await fetch(url).then((res) => {
      if (!res.ok) {
        error = new Error(res.statusText);
      }
      response = res.json() as unknown as PriceResponse;
    });
  } catch (e) {
    console.log(error.message);
  }
  return response || error;
};

export const PriceService = { getPrice };
