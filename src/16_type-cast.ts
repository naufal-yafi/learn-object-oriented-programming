import { Child, Parent, Polymorphism } from "./15_polymorphism";

function typeCast(parent: Parent): string {
  if (parent instanceof Polymorphism) {
    const poly = parent as Polymorphism;
    return `Class polymorphism ${poly.name}`;
  } else if (parent instanceof Child) {
    const ch = parent as Child;
    return `Class child ${ch.name}`;
  } else {
    return `Class parent ${parent.name}`;
  }
}

export default typeCast;
