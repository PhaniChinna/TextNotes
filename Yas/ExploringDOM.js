//  console.log("Exploring DOm");
//  const h1 = window.document.querySelectorAll("h1");
//  console.log(h1);
//  h1.innerHTML = "Explore The New Dom Models";

// 1) Access by querySelector

//  const allHeading = window.document.querySelectorAll("h1");
//  const getHeading = allHeading.forEach((item) => console.log(item));
// No of heading Elements
// const div = window.document.querySelector("div");
// const btn = window.document.querySelector("button");

// btn.addEventListener("click", function () {
//   div.innerHTML += `<h1>DOM Methods ${Math.random()}</h1>`;
//   const h1Element = window.document.querySelectorAll("h1");
//   console.clear();
//   h1Element.forEach((item) => console.log(item));
// });

// 2) Access By ID

const div = window.document.getElementById("root");
const btn = window.document.getElementById("AddH1");

btn.addEventListener("click", function () {
  div.innerHTML += `<h1> The DOM Number is :  ${Math.floor(
    Math.random() * 100
  )}</h1>`;
  // get by ClassName
  const myDiv = window.document.getElementsByClassName("myDiv");
  console.log(myDiv[0]);
  //   const h1Element = window.document.querySelectorAll("h1");
  //   console.clear();
  //   h1Element.forEach((item) => console.log(item));
});

// 3) Access By ClassName

// const div = window.document.getElementsByClassName("root");
// const btn = window.document.getElementsByClassName("AddH1");
