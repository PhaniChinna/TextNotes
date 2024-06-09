const body = document.querySelector("body");
//console.log(body);

// const h1 = document.createElement("h1");
// h1.innerText = "How To use createElement API";
// document.body.appendChild(h1);

// function createInput(inputType, inputId, inputName, inputPlaceholder) {
//   const input = window.document.createElement("input");
//   input.setAttribute("type", inputType);
//   input.setAttribute("id", inputId);
//   input.setAttribute("name", inputName);
//   input.setAttribute("placeholder", inputPlaceholder);
//   return input;
// }

// body.appendChild(
//   createInput("text", "userName", "UserInput", "Enter Your  UserName")
// );

// body.appendChild(
//   createInput(
//     "password",
//     "userPassword",
//     "PasswordUser",
//     "Enter Your  Password"
//   )
// );

const div = document.createElement("div");
div.setAttribute("id", "root");
const h1 = document.createElement("h1");
h1.innerText = "Hello World";
h1.style.backgroundColor = "red";
h1.style.color = "yellow";
div.appendChild(h1);
body.appendChild(div);

const rootDiv = document.getElementById("root");
rootDiv.addEventListener("click", function () {
    h1.style.backgroundColor = "Green";
    h1.style.color = "orange";
});
console.log(window.document);
