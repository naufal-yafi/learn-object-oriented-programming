import { Hello } from "./10_method-overriding";

class SuperMethod extends Hello {
  sayHi(name: string): string {
    return `${super.sayHi(name)}, I'm your manager.`;
  }
}

export default SuperMethod;
