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

}

