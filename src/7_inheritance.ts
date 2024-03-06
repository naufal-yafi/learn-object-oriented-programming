class Parent {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

class Child extends Parent {}

class Children extends Child {}

export { Child, Children, Parent };
