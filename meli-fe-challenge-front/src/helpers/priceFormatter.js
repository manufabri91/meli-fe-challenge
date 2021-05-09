const priceFormatter = (priceObject) => {
  let formattedPrice = priceObject.currency.toUpperCase() === 'ARS' ? '$ ' : priceObject.currency;
  formattedPrice += priceObject.amount.toLocaleString();
  return formattedPrice;
};

export default priceFormatter;
