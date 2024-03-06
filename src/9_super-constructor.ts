class Human {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

class Health extends Human {
  protein: number;

  constructor(name: string, protein: number) {
    super(name);
    this.protein = protein;
  }
}

export default Health;
