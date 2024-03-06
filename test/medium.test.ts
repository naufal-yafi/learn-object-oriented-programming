import GetterSetter from "../src/6_getter-setter";
import { Child, Children, Parent } from "../src/7_inheritance";
import LoginUser from "../src/8_interface-inheritance";
import Health from "../src/9_super-constructor";

describe("Medium", () => {
  describe("Getter & Setter", () => {
    const getterSetter = new GetterSetter();

    it("Empty name", () => {
      expect("Empty").toBe(getterSetter.name);
    });

    it("Field name", () => {
      getterSetter.name = "Naufal";
      expect("Naufal").toBe(getterSetter.name);
    });

    it('Name can\'t change after field name empty string("")', () => {
      getterSetter.name = "";
      expect("Naufal").toBe(getterSetter.name);
    });
  });

  describe("Inheritance", () => {
    const parent = new Parent("Muhammad");
    const child = new Child("Naufal");
    const children = new Children("Yafi");

    it("Checking content parent", () => {
      expect("Muhammad").toBe(parent.name);
    });

    it("Checking content child", () => {
      expect("Naufal").toBe(child.name);
    });

    it("Checking content children", () => {
      expect("Yafi").toBe(children.name);
    });
  });

  describe("Interface Inheritance", () => {
    it("Login success", () => {
      const login = new LoginUser("Naufal", "admin123");
      expect("Naufal").toBe(login.name);
      expect("admin123").toBe(login.password);
      expect(true).toBe(login.Login("Naufal", "admin123"));
    });

    it("Login failed", () => {
      const login = new LoginUser("Naufal", "");
      expect("Naufal").toBe(login.name);
      expect("").toBe(login.password);
      expect(false).toBe(login.Login("Naufal", ""));
    });

    it("Handling empty field", () => {
      const login = new LoginUser("", "");
      expect("").toBe(login.name);
      expect("").toBe(login.password);
      expect(false).toBe(login.Login("", ""));
    });
  });

  it("Super Constructor", () => {
    const person = new Health("Naufal", 55);

    expect("Naufal").toBe(person.name);
    expect(55).toBe(person.protein);
  });
});
