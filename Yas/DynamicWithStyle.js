//console.log("Dynamic Style");

const h1 = document.querySelector("h1");
h1.style.backgroundColor = "green";
h1.style.color = "white";
h1.style.padding = "20px";
h1.style.borderRadius = "10px";
console.log(h1);

h1.addEventListener("mouseover", function () {
  h1.style.backgroundColor = "red";
  h1.style.cursor = "pointer";
});

h1.addEventListener("mouseleave", function () {
  h1.style.backgroundColor = "green";
  h1.style.cursor = "pointer";
});
