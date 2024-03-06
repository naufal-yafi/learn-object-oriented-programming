class People {
  readonly id: number;
  name: string;
  age?: number;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
}

export default People;
