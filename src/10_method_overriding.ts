class Hello {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  sayHi(name: string): string {
    return `Hi ${name}, my name is ${this.name}`;
  }
}

class MethodOverriding extends Hello {
  sayHi(name: string): string {
    return `Hi ${name}, my name is ${this.name}, I'm your manager.`;
  }
}

export default MethodOverriding;
