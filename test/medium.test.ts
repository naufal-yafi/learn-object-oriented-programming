import GetterSetter from "../src/6_getter-setter";

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
});
