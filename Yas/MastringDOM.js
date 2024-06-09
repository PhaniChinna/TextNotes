// Manipulation : Modify and Updating Events
// console.log("Dom Manipulation");

const h1 = document.querySelector("h1");
const button = document.querySelector("button");

// button.addEventListener("click", function () {
//   h1.innerText = `Hello The Number is :  ${Math.floor(Math.random() * 100)}`;
// });

console.log(document);

setInterval(function () {
  h1.innerText = `Hello The Number is :  ${Math.floor(Math.random() * 100)}`;
}, 1000);
