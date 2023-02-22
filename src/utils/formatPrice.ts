//Formatea valores en la moneda

export const formatPrice = (price: number) => {
  return `$${new Intl.NumberFormat("DE").format(price)}`;
};
