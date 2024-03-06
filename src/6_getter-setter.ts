class GetterSetter {
  _name?: string;

  get name(): string {
    if (this._name) {
      return this._name;
    } else {
      return "Empty";
    }
  }

  set name(newName: string) {
    if (newName !== "") {
      this._name = newName;
    }
  }
}

export default GetterSetter;
