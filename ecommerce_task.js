class Product {
  constructor(id, name, price) {
    this.id = id;
    this.name = name;
    this.price = price;
  }

  // show product details
  getDetails() {
    return this.id + ". " + this.name + " (" + this.price + ")";
  }
}
// ------------------------------ <end of product class> ------------------------------

// cart class
class Cart {
  constructor() {
    this.items = [];
    this.total = this.items.length;
  }

  // add new product to items array
  addProduct(product) {
    this.items.push(product);
  }

  // remove product from items array
  removeProduct(product) {
    this.items.splice(this.items.indexOf(product), 1);
  }

  // checkout method
  checkout() {
    console.log("Checking out...\n");
    console.log("Total items: " + this.items.length);
    console.log("Total amount: " + this.calculateTotal());

    // empty cart
    this.items = [];
  }

  // calculate total method
  calculateTotal() {
    let total = 0;
    this.items.forEach((item) => {
      total += item.price;
    });
    return total;
  }
}
// ------------------------- <end of cart class> -------------------------

// User class
class User {
  constructor(id, name, cart) {
    this.id = id;
    this.name = name;
    this.cart = cart;
  }

  // display user cart
  displayCart() {
    console.log("Displaying cart items of user: " + this.name);

    if (this.cart.items.length == 0) {
      console.log("Cart is empty");
    } else {
      this.cart.items.forEach((item) => {
        console.log(item.getDetails());
      });
    }

    console.log("Total amount: " + this.cart.calculateTotal());
  }
}
// ------------------------- <end of User class> -------------------------

// creating instance of product
let p1 = new Product(1, "iPhone", 1000);
let p2 = new Product(2, "Samsung", 500);
let p3 = new Product(3, "Nokia", 300);

console.log(p1.getDetails());

// creating instance of cart class
let cart = new Cart();

// adding products to cart
cart.addProduct(p1);
cart.addProduct(p2);
cart.addProduct(p3);

// removing product from cart
cart.removeProduct(p2);

// checking out
cart.checkout();

// creating instance of user class
let user = new User(1, "John", cart);
user.displayCart();
