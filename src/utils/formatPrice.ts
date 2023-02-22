//Formatea valores en la moneda Europea

export const formatPrice = (price: number) => {
  return `$${new Intl.NumberFormat("DE").format(price)}`;
};
