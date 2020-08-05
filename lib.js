module.exports.absolute = (number) => {
  return number >= 0 ? number : -number;
};
module.exports.greet = (name) => {
  return `Welcome ${name}`;
};
module.exports.getCurrencies = (name) => {
  return ["EUR", "USD", "AUD"];
};
module.exports.getProduct = (productId) => {
  return { id: productId, price: 10 };
};
module.exports.regsiterUser = (username) => {
  if (!username) throw new Error("User name is required");
  return { id: new Date().getTime(), username };
};
