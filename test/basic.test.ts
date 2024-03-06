import EmptyClass from "../src/class";
import Customer from "../src/contructor";
import DefaultValue from "../src/default-value";
import People from "../src/properties";

describe("Basic", () => {
  it("Intance new empty class", () => {
    const emptyClass: EmptyClass = new EmptyClass();
  });

  it("Constructor", () => {
    new Customer();
    new Customer();
  });

  it("Properties", () => {
    const people1 = new People(1, "Naufal");
    const people2 = new People(2, "Yafi");

    expect(people1.id).toBe(1);
    expect(people1.name).toBe("Naufal");
    expect(people1.age).toBe(undefined);

    expect(people2.id).toBe(2);
    expect(people2.name).toBe("Yafi");
    expect(people2.age).toBe(undefined);

    people1.age = 20;
    expect(people1.age).toBe(20);

    people2.age = 80;
    expect(people2.age).toBe(80);
  });

  it("Default Value", () => {
    const typeName = new DefaultValue(1);

    expect(typeName.name).toBe("Type your name");
    typeName.name = "Naufal";
    expect(typeName.name).toBe("Naufal");
  });
});
