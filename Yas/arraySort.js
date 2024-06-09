// Assending Order
// Descending Order

// Letters
const fruits = ["mango", "kiwi", "apple"];
console.log(fruits.sort());

// Number case

const age = [12, 22, 100, 76];
// console.log(age.sort())
console.log(
  age.sort((a, b) => {
    return a - b;
  })
); // aanmus and callback function [assending order]
// decending order
console.log(
  age.sort((a, b) => {
    return b - a;
  })
);
