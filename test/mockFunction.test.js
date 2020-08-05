const { applyDiscount, notifyCustomer } = require("../mockFunction");
const db = require("../db");
const mail = require("../mail");

describe("applyDiscount", () => {
  it("should apply 10% discount if customer has more than 10 points", () => {
    db.getCustomerSync = jest.fn().mockReturnValue({ id: 1, points: 11 });
    const order = { customerId: 1, totalPrice: 10 };
    applyDiscount(order);
    expect(order.totalPrice).toBe(9);
  });
});

describe("notifyCustomer", () => {
  it("should send an email to the customer", () => {
    db.getCustomerSync = jest.fn().mockReturnValue({ email: "testMail" });
    mail.send = jest.fn();

    notifyCustomer({ customerId: 1 });

    expect(mail.send).toHaveBeenCalled;
    expect(mail.send.mock.calls[0][0]).toBe("testMail");
    expect(mail.send.mock.calls[0][1]).toMatch(/order/);
  });
});
