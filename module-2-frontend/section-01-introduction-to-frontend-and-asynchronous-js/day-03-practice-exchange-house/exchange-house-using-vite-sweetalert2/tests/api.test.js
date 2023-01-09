const { trybeSimulator } = require("./simulator");
const api = require("../api");
const getRatesSimulator = trybeSimulator(api, "fetchCurrency");
const { mapRates } = require("./helpers");

describe("Test the function mapRates", () => {
  it("Must convert the acronyms in the object of quotas to the format of Array", async () => {
    const rates = await getRatesSimulator("USD");
    const ratesArray = mapRates(rates);
    const isRatesArrayAnArray = Array.isArray(ratesArray);
    expect(isRatesArrayAnArray).toBe(true);
  });

  it("It must generate an array with a size equal to the quantity of keys in the received object", async () => {
    const rates = await getRatesSimulator("USD");
    const ratesKeys = Object.keys(rates);
    const ratesArray = mapRates(rates);
    expect(ratesArray.length).toBe(ratesKeys.length);
  });

  it("Must not modify the rates key", async () => {
    const rates = await getRatesSimulator("USD");
    const ratesKeys = Object.keys(rates);
    mapRates(rates);
    const ratesKeysAfterMap = Object.keys(rates);
    expect(ratesKeys).toEqual(ratesKeysAfterMap);
  });

  it("Should generate an array where the elements have the key currency and rate", async () => {
    const rates = await getRatesSimulator("USD");
    const ratesArray = mapRates(rates);
    ratesArray.forEach((element) => {
      expect(element).toHaveProperty("currency");
      expect(element).toHaveProperty("rate");
    });
  });
});
