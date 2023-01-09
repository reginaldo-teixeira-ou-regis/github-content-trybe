function mapRates(rates) {
  return Object.entries(rates).map(([currency, rate]) => {
    return {
      currency,
      rate,
    };
  });
}

module.exports = {
  mapRates,
};
