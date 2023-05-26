const createLi = (text) => {
  const ulContainer = document.getElementById("coins-list");
  const liCreated = document.createElement("li");
  liCreated.innerText = text;
  ulContainer.appendChild(liCreated);
};

const createLi2 = (text) => {
  const ulContainer = document.getElementById("coins-list-brl");
  const liCreated = document.createElement("li");
  liCreated.innerText = text;
  ulContainer.appendChild(liCreated);
};

const altCoins = fetch("https://api.coincap.io/v2/assets").then((response) =>
  response.json()
);

const baseUrl = fetch(
  "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd/brl.min.json"
).then((response) => response.json());

const fetchCoins = async () => {
  try {
    const objAltCoins2 = await altCoins;
    const baseUrl2 = await baseUrl;
    const { brl } = baseUrl2;
    const { data } = objAltCoins2;
    data.reduce((acc, coin, index) => {
      if (index < 10) {
        const textOfLi = `${coin.name} (${coin.symbol}): ${Number(
          coin.priceUsd
        ).toFixed(2)}`;
        const textOfLi2 = `${coin.name} (${coin.symbol}): ${Number(
          coin.priceUsd * brl
        ).toFixed(2)}`;
        createLi(textOfLi);
        createLi2(textOfLi2);
      }
      return acc;
    }, "");
  } catch (error) {
    console.log("erro", error);
  }
};
fetchCoins();
