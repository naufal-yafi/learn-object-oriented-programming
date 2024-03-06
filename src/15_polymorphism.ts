/*
    Polymorphism: kondisi dimana object bisa berubah bentuk dari turunan classnya
*/

class Parent {
  constructor(public name: string) {}
}

class Child extends Parent {}

class Polymorphism extends Child {}

function sayName(parent: Parent) {
  return `Hello ${parent.name}`;
}

export { Child, Parent, Polymorphism, sayName };
