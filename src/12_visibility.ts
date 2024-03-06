class Counter {
  // protected digunakan agar variabel tersebut dapat diakses oleh class turunannya
  protected counter: number = 0;

  public increment(): void {
    this.counter++;
  }

  public getCounter(): number {
    return this.counter;
  }
}

class DoubleCounter extends Counter {
  public increment(): void {
    this.counter += 2;
  }
}

export { Counter, DoubleCounter };
