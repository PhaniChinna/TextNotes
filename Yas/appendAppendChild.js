// console.log("Hello World");
// Append ===> node List
// AppendChild ====> individual Elements
// (parent-child)

const rootEle = window.document.getElementById("root");
const h1Collection = ["Hello 1", "Hello 1", "Hello 1", "Hello 1", "Hello 1"];
const h1_result = h1Collection.map((h1) => {
  let newElement = window.document.createElement("h1");
  newElement.innerText = h1;
  return newElement;
});
rootEle.append(...h1_result);
console.log(rootEle);
