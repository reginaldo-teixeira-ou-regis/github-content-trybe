const LOCAL_STORAGE_KEY = 'CURRENCY_LIST';

window.onload = () => {
  setupEventHandlers();
  retrieveLocalStorageIfNeeded();
};

const setupEventHandlers = () => {
  const searchButton = document.querySelector("#search-button");
  searchButton.addEventListener("click", handleSearchEvent);
};

const retrieveLocalStorageIfNeeded = () => {
  const currencyInfo = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
  if (currencyInfo) {
    const { base, rates } = currencyInfo;
    handleRates(rates);
    handleBaseCurrency(base);
  }
}

const saveCurrencyOnLocalStorage = (currencyInfo) => {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(currencyInfo));
}

const handleSearchEvent = async () => {
  const currencyElement = document.getElementById('currency-input');
  const currencyValue = currencyElement.value.toUpperCase();

  clearList();
  const currencyInfo = await fetchCurrency(currencyValue);
  saveCurrencyOnLocalStorage(currencyInfo);

  handleBaseCurrency(currencyInfo.base);
  handleRates(currencyInfo.rates);
};

const clearList = () => {
  const currencyList = document.querySelector("#currency-list");
  currencyList.innerHTML = "";
};

const handleError = (error) => {
  window.alert(error);
};

const handleRates = (rates) => {
  const ratesEntries = Object.entries(rates);

  ratesEntries.forEach(([currency, rate]) => {
    renderRate(currency, rate);
  });
};

const renderRate = (currency, rate) => {
  const currencyList = document.querySelector("#currency-list");
  const formattedRate = rate.toFixed(2);

  const li = document.createElement("li");
  li.innerHTML = `<b>${currency}:</b> ${formattedRate}`;
  currencyList.appendChild(li);
};

const handleBaseCurrency = (base) => {
  const baseTitle = document.querySelector("#base");
  baseTitle.innerText = `Valores referentes a 1 ${base}:`;
};
//////////////////////////////////////////////////////////
