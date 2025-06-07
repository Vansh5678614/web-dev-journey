// The Shopping Cart Totalizer:
    // You are working on an e-commerce website, and 
    // you need to calculate the total cost of items in the shopping cart.
    // 
    // Implement a function named calculateTotal that takes an array
    //  of products with prices and quantities and returns the total cost.

class Product {
    constructor (price , quantity){
        this.price = price ;
        this.quantity = quantity ;
    }
}


function calculateTotal(products) {
    let total_cost =0 ;
    for (const product of products) {
        total_cost += product.price *product.quantity ;
    }

    return total_cost ;
}

const cart = [
  new Product(100, 2),   // 200
  new Product(250, 1),   // 250
  new Product(75, 3),    // 225
  new Product(50, 5)     // 250
];

console.log("Total Cost:", calculateTotal(cart)); // Output: 925