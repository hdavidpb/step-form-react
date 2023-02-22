//Formatea valores en la moneda

export const parsePrice = (price: number) => {
  return `$${new Intl.NumberFormat("DE").format(price)}`;
};
