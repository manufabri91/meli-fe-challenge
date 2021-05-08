class Price {
  currency;
  amount;
  decimals;

  constructor(currency, amount, decimals = 0) {
    this.currency = currency;
    this.amount = amount;
    this.decimals = decimals;
  }
}

export default Price;
