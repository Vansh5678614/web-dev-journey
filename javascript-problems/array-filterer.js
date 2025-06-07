//  The Array Filterer:
// You are building a search feature for your e-commerce site.
// Write a function named filterProducts that takes an array of product objects
//  and a filter criterion. The function should return a new array containing only the products that match the filter criterion.

const products = [
  { id: 1, name: "Laptop", category: "electronics", price: 1000 },
  { id: 2, name: "Shirt", category: "clothing", price: 30 },
  { id: 3, name: "Phone", category: "electronics", price: 500 },
  { id: 4, name: "Pants", category: "clothing", price: 50 },
];
//  console.log(products) ;
// if multiple criteria then can use a loop apply the and condition 
const filterCriteria = { category: "electronics" };
function filterProducts(products, filterCriteria) {
  return products.filter((product) => {
    const key = Object.keys(filterCriteria)[0]; 
    const value = Object.values(filterCriteria)[0];

    return product[key] == value ;  // as all the values of a fields is of  same data type == 
  });
}

console.log(filterProducts(products, filterCriteria))

// better logic
// Check that all keys in the criterion match the product's properties
    // for (let key in criterion) {
    //   if (product[key] !== criterion[key]) {
    //     return false; // skip this product
    //   }
    // }
    // return true; // all criterion matched