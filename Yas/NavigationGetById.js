//console.log("Hello World");
// getElementById
// querySelector
// querySelectorAll
console.log(document);

function fetchEle(element, singleton = true) {
  return singleton
    ? window.document.querySelector(element)
    : window.document.querySelectorAll(element);
}

const divRoot = document.getElementById("root");

const h1 = fetchEle("h1");
console.log(h1);

const AllHeadingEle = fetchEle("h1", false);
// const Result = AllHeadingEle.forEach((ele) => console.log(ele));
console.log(divRoot);
