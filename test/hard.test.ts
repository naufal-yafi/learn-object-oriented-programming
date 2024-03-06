import { Counter, DoubleCounter } from "../src/12_visibility";

describe("Hard", () => {
  describe("Visibility", () => {
    const count = new Counter();
    const doubleCount = new DoubleCounter();

    it("Get 0 value count", () => {
      expect(0).toBe(count.getCounter());
    });

    it("Add 1 count", () => {
      count.increment();
    });

    it("Get 1 value count", () => {
      expect(1).toBe(count.getCounter());
    });

    it("0 value on child class", () => {
      expect(0).toBe(doubleCount.getCounter());
    });

    it("Double count", () => {
      doubleCount.increment();
    });

    it("Get 2 value count on child class", () => {
      expect(2).toBe(doubleCount.getCounter());
    });
  });
});
