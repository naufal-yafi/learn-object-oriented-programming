abstract class Abstract {
  readonly id: number;

  constructor(id: number) {
    this.id = id;
  }

  abstract hi(name: string): string;
}

class RegulerClass extends Abstract {
  name: string;

  constructor(id: number, name: string) {
    super(id);
    this.name = name;
  }

  hi(name: string): string {
    return `Hello ${name}, ${this.name}`;
  }
}

export default RegulerClass;
