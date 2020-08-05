const fizzBuzz = require("../fizzBuzz");

describe("FizzBuzz", () => {
  it("should throw an exception if input is not a number", () => {
    const args = ["a", undefined, NaN, null];
    args.forEach((a) => {
      expect(() => {
        fizzBuzz(a);
      }).toThrow();
    });
  });

  it("should return FizzBuzz if input is devisble by 3 and 5", () => {
    const result = fizzBuzz(15);
    expect(result).toBe("FizzBuzz");
  });
  it("should return Fizz if input is only devisble by 3", () => {
    const result = fizzBuzz(3);
    expect(result).toBe("Fizz");
  });
  it("should return Buzz if input is only devisble by 5", () => {
    const result = fizzBuzz(5);
    expect(result).toBe("Buzz");
  });

  it("should return the input if not all of the above", () => {
    const result = fizzBuzz(1);
    expect(result).toBe(1);
  });
});
