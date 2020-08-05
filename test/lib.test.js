const {
  absolute,
  greet,
  getCurrencies,
  getProduct,
  regsiterUser,
} = require("../lib");

//testing numbers
describe("absolute", () => {
  it("should return positive if number is positive", () => {
    const result = absolute(1);
    expect(result).toBe(1);
  });

  it("should return positive if number is negative", () => {
    const result = absolute(-1);
    expect(result).toBe(1);
  });

  it("should return 0 if number is 0", () => {
    const result = absolute(0);
    expect(result).toBe(0);
  });
});

//testing strings
describe("greet", () => {
  const result = greet("name");
  it("should return the greeting message", () => {
    // expect(result).toContain("name");
    expect(result).toMatch(/name/);
  });
});

//testing arrays
describe("getCurrencies", () => {
  it("should return currencies", () => {
    const result = getCurrencies();
    expect(result).toEqual(expect.arrayContaining(["EUR", "USD", "AUD"]));
  });
});

// testing objects
describe("getProduct", () => {
  it("should return the product with the given id", () => {
    const result = getProduct(1);
    // expect(result).toEqual({ id: 1, price: 10 });
    // expect(result).toMatchObject({ id: 1 });
    expect(result).toHaveProperty("id", 1);
  });
});

//testing exceptions
describe("registerUser", () => {
  it("should throw if username is falsy", () => {
    const args = [null, undefined, "", 0, false, NaN];
    args.forEach((a) => {
      expect(() => {
        regsiterUser(a);
      }).toThrow();
    });
  });

  it("should return valid user if username is truthy", () => {
    const result = regsiterUser("test");
    expect(result).toMatchObject({ username: "test" });
    expect(result.id).toBeGreaterThan(0);
  });
});
