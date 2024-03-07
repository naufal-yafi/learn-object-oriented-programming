import ParameterProperties from "../src/13_parameter-properties";
import { Instanceof, Operator } from "../src/14_operator-instanceof";
import Static from "../src/18_static";
import EmptyClass from "../src/1_class";
import Namespace from "../src/20_namespace";
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

  describe("Parameter Properties", () => {
    const person = new ParameterProperties("Yafi");

    it("Check content", () => {
      expect("Yafi").toBe(person.name);
    });

    it("Change name", () => {
      person.name = "Naufal";
    });

    it("Check content change", () => {
      expect("Naufal").toBe(person.name);
    });
  });

  describe("Operator Instanceof", () => {
    const operator = new Operator();
    const instance = new Instanceof();

    it("Typeof", () => {
      expect("object").toBe(typeof operator);
      expect("object").toBe(typeof instance);
    });

    it("Typeof", () => {
      expect(operator instanceof Operator).toBe(true);
      expect(operator instanceof Instanceof).toBe(false);

      expect(instance instanceof Instanceof).toBe(true);
      expect(instance instanceof Operator).toBe(false);
    });
  });

  describe("Static", () => {
    it("Checking content", () => {
      expect("Naufal").toBe(Static.NAME);
      expect(18).toBe(Static.AGE);
    });

    it("Update age", () => {
      expect("Naufal").toBe(Static.NAME);
      Static.updateAge(21);
      expect(21).toBe(Static.AGE);
    });
  });

  describe("Namespace", () => {
    it("Checking content", () => {
      expect("Naufal").toBe(Namespace.NAME);
    });

    it("Function", () => {
      expect(5).toBe(Namespace.sum(2, 3));
    });
  });
});
