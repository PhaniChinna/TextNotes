//console.log("Hello World");

// alert prompt  conform

// const alertBtn = document.getElementById("alert");
// const promptBtn = document.getElementById("prompt");
// const confirmBtn = document.getElementById("confirm");

// console.log(alertBtn);
// console.log(promptBtn);
// console.log(confirmBtn);

const fetchElement = (id) => document.getElementById(id);

const alertButton = fetchElement("alert");
const promptButton = fetchElement("prompt");
const confirmButton = fetchElement("confirm");

const divRoot = fetchElement("root");

alertButton.addEventListener("click", function () {
  window.alert("Hello World");
});

promptButton.addEventListener("click", function () {
  const result = window.prompt("Do You Want Logout");
  divRoot.innerText = "Prompt " + result;
});

confirmButton.addEventListener("click", function () {
  const Final = window.confirm("Do You Want To Logout");
  divRoot.innerText = "Confirm " + Final;
});
