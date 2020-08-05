const db = require("./db");
const mail = require("./mail");

module.exports.applyDiscount = (order) => {
  const customer = db.getCustomerSync(order.customerId);
  if (customer.points > 10) order.totalPrice *= 0.9;
};

module.exports.notifyCustomer = (order) => {
  const customer = db.getCustomerSync(order.cutomerId);
  mail.send(customer.email, "Your order was placed successfully");
};
