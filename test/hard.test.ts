import { Counter, DoubleCounter } from "../src/12_visibility";
import { Child, Parent, Polymorphism, sayName } from "../src/15_polymorphism";
import typeCast from "../src/16_type-cast";

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

  describe("Polymorphism", () => {
    let poly: Parent = new Parent("Muhammad");

    it("Checking content", () => {
      expect("Muhammad").toBe(poly.name);
    });

    it("Checking child content", () => {
      poly = new Child("Naufal");
      expect("Naufal").toBe(poly.name);
    });

    it("Checking polymorphism content", () => {
      poly = new Polymorphism("Yafi");
      expect("Yafi").toBe(poly.name);
    });

    it("Checking fungsi", () => {
      expect("Hello Muhammad").toBe(sayName(new Parent("Muhammad")));
      expect("Hello Naufal").toBe(sayName(new Parent("Naufal")));
      expect("Hello Yafi").toBe(sayName(new Parent("Yafi")));
    });
  });

  it("Type Cast", () => {
    expect("Class parent Oi").toBe(typeCast(new Parent("Oi")));
    expect("Class child P").toBe(typeCast(new Child("P")));
    expect("Class polymorphism U").toBe(typeCast(new Polymorphism("U")));
  });
});
