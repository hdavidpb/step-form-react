import { Product } from "../context/interfaces";
import { ContentData, IDataProducts } from "../interfaces/interfaces";

export const createProductsAdapter = (data: ContentData): Product[] => {
  const [headers, ...products] = data.content;
  let product: { [key: string]: any } = {
    count: 0,
    isSelected: false,
  };
  let productList = [];

  for (let i = 0; i < products.length; i++) {
    for (let prod = 0; prod < products[i].length; prod++) {
      product[headers[prod]] = products[i][prod];
    }
    productList.push(product);
    product = { count: 0, isSelected: false };
  }

  return productList as Product[];
};
