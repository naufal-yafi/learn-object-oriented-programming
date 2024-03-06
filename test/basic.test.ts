import EmptyClass from "../src/1_class";
import Customer from "../src/2_contructor";
import People from "../src/3_properties";
import DefaultValue from "../src/4_default-value";
import Method from "../src/5_method";

describe("Basic", () => {
  it("Intance new empty class", () => {
    const emptyClass: EmptyClass = new EmptyClass();
  });

  it("Constructor", () => {
    new Customer();
    new Customer();
  });

  describe("Properties", () => {
    const people1 = new People(1, "Naufal");
    const people2 = new People(2, "Yafi");

    it("Checking content", () => {
      expect(people1.id).toBe(1);
      expect(people1.name).toBe("Naufal");
      expect(people1.age).toBe(undefined);

      expect(people2.id).toBe(2);
      expect(people2.name).toBe("Yafi");
      expect(people2.age).toBe(undefined);
    });

    it("Field age", () => {
      people1.age = 20;
      expect(people1.age).toBe(20);

      people2.age = 80;
      expect(people2.age).toBe(80);
    });
  });

  describe("Default Value", () => {
    const typeName = new DefaultValue(1);

    it("Value default content", () => {
      expect(typeName.name).toBe("Type your name");
    });

    it("Field name", () => {
      typeName.name = "Naufal";
      expect(typeName.name).toBe("Naufal");
    });
  });

  it("Method", () => {
    const method = new Method(1, "Naufal");

    method.sayHello("Yafi");

    expect(method.id).toBe(1);
    expect(method.name).toBe("Naufal");

    method.sayHello("Naufal");
  });
});
