import { ContentData, IProduct } from "../interfaces/interfaces";

export const createProductsAdapter = (data: ContentData): IProduct[] => {
  const [headers, ...products] = data.content;
  let product: { [key: string]: any } = {};
  let productList = [];

  for (let i = 0; i < products.length; i++) {
    for (let prod = 0; prod < products[i].length; prod++) {
      product[headers[prod]] = products[i][prod];
    }
    productList.push(product);
    product = {};
  }

  return productList as IProduct[];
};
