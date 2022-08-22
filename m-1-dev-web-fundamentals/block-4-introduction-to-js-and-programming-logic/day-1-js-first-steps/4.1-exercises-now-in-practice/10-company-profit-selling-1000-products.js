function companyProfitOnSales(productCost, saleValue) {

    const tax = 20;

    let taxOnCost = (tax * productCost) / 100;
    let valueCostTotal = productCost + taxOnCost;
    let profit = saleValue - valueCostTotal;
    let profit1000sales = profit * 1000;

    if(productCost < 0 || saleValue < 0) {
        return profit1000sales = "ERROR, digite os valores corretamente.";
    } else {
        return profit1000sales;
    }
}
console.log(companyProfitOnSales(2000,3500));
console.log(companyProfitOnSales(0,2500));
console.log(companyProfitOnSales(2000,0));
console.log(companyProfitOnSales(0,0));
console.log(companyProfitOnSales(2500,2500));
console.log(companyProfitOnSales(5000,2500));

