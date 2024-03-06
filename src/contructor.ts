class Customer {
  constructor() {
    console.log("Constructor ini berjalan");
  }
}

export default Customer;

new Customer();
new Customer();

/*
    Output:
    Constructor ini berjalan
    Constructor ini berjalan
*/
