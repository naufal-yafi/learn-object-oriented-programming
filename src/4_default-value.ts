class DefaultValue {
  readonly id: number;
  name: string = "Type your name";
  age?: number;

  constructor(id: number) {
    this.id = id;
  }
}

export default DefaultValue;
