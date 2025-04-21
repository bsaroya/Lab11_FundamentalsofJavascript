// Product class handles basic product information and stock value
class Product {
  constructor(name, price, quantity) {
    this.name = name;         // Name of the product 
    this.price = price;       // Price per unit
    this.quantity = quantity; // Units available in stock
  }
  // Calculates total value of the product in stock
getTotalValue() {
  return this.price * this.quantity;
}
// Returns a formatted string describing the product
toString() {
  return `Product: ${this.name}, Price: $${this.price.toFixed(2)}, Quantity: ${this.quantity}`;
}
// Static method to apply a discount to multiple products
static applyDiscount(products, discount) {
  products.forEach(product => {
    product.price -= product.price * discount; // Reduce price by discount %
  });
}

}
// PerishableProduct class extends Product and adds an expiration date
class PerishableProduct extends Product {
  constructor(name, price, quantity, expirationDate) {
    super(name, price, quantity);        // Call the parent class constructor
    this.expirationDate = expirationDate; // Add expiration info
  }
  // Extend the string output to include the expiration date
toString() {
  return `${super.toString()}, Expiration Date: ${this.expirationDate}`;
}

}
