class Method {
  readonly id: number;
  name: string;
  age?: number;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  sayHello(name: string): void {
    console.info(`Baru ${name}, Lama ${this.name}`);
  }
}

export default Method;
