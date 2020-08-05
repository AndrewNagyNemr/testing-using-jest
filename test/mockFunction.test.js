const { applyDiscount } = require("../mockFunction");
const db = require("../db");

describe("applyDiscount", () => {
  it("should apply 10% discount if customer has more than 10 points", () => {
    db.getCustomerSync = (id) => {
      console.log("Fake reading customer");
      return { id, points: 11 };
    };
    const order = { customerId: 1, totalPrice: 10 };
    applyDiscount(order);
    expect(order.totalPrice).toBe(9);
  });
});
