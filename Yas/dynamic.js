// // document
// //console.log(document);
// //  The HTML Script tag should be in down
// // of h1
// //querySelector is used for extract element
// // const h1 = document.querySelector("h1");
// // h1.innerText = "Hello JavaScript";
// // console.log(h1);
// const CustomDiv = document.getElementById("customDiv");
// //CustomDiv.'innerText' = "Learn Angular ";
// // CustomDiv.'innerHTML' = "<h2>Lets Learn React</h2>";
// // const h2 = document.createElement("h2");
// const h2 = document.createElement("h2");
// h2.textContent = "Hello  How Are  You";
// console.log(h2);
// CustomDiv.appendChild(h2);
// button.addEventListener("click", function () {
//   h1.innerText = "We are SuccessFully In JavaScript ";
// });

const div = document.querySelector("div");
const input = document.createElement("input");
input.value = "Angular Course";
input.type = "date";
input.placeholder = "Enter Some Content";
input.id = "course_field";
const h1 = document.createElement("h1");
h1.innerText = "Dynamic Content in HTML";
const button = document.createElement("button");
button.textContent = "Click Me! ";
div.appendChild(h1);
div.appendChild(input);
div.appendChild(button);

button.addEventListener("click", function () {
  h1.innerText = "We are SuccessFully In JavaScript ";
});
