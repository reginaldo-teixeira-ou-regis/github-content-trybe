const createItem = (name, unit, price, quantity) => {
  if (typeof name !== "string") {
    throw new Error("O nome do item deve ser uma string");
  }
  if (price <= 0) {
    throw new Error("O preço do item deve ser maior que zero");
  }
  if (quantity === undefined) {
    quantity = 0;
  }
  return {
    name: name,
    quantity: quantity,
    unit: unit,
    price: price,
  };
};
console.log(createItem('banana', 'kg', 1.99, 20));
console.log(' ');
console.log(createItem('Coca-Cola', '600ml', 15.89, 3));

module.exports = createItem;