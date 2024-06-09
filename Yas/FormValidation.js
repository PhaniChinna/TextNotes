// input form and input and password should be displayed in Console
/*
const inputText = document.getElementById("textInput");
const inputPassword = document.getElementById("textPassword");
const btn = document.getElementById("btn_Id");

btn.addEventListener("click", function () {
  var inputTextValue = inputText.value;
  var inputTextPassword = inputPassword.value;
  console.log({
    inputTextValue,
    inputTextPassword,
  });
  inputText.value = "";
  inputPassword.value = "";
});
*/

// const btn = document.getElementById("btn_Id");
// const inputText = document.getElementById("textInput");
// const inputPassword = document.getElementById("textPassword");
const changeInputValue = document.getElementById("changeInput");
const SecondHeading = document.querySelector("h2");

changeInputValue.addEventListener("keydown", function (event) {
  SecondHeading.innerHTML = event.target.value;
});

// btn.addEventListener("click", function () {
//   const itValue = inputText.value;
//   const ipValue = inputPassword.value;
//   const IT = checkUserNameValidity(itValue);
//   const IP = checkPasswordValidity(ipValue);
//   if (IT && IP) {
//     console.log({
//       UserName: itValue,
//       Password: ipValue,
//     });
//   } else {
//     window.alert("Please Check The Given Values");
//   }
// });

// function checkValidValues(inputField) {
//   return inputField === "";
// }

// function checkUserNameValidity(userName) {
//   return userName.includes("@gmail.com");
// }

// function checkPasswordValidity(userPassword) {
//   return userPassword.length >= 6;
// }

// <!-- <!DOCTYPE html>
// <html>
//   <head>
//     <style>
//       .flexContainer {
//         display: flex;
//         flex-direction: column;
//         justify-content: center;
//         align-items: center;
//         height: 100vh;
//         gap: 10px;
//       }
//       input {
//         border: none;
//         border-radius: 12px;
//         border: 1px solid darkgray;
//         padding: 10px;
//       }
//       input:focus {
//         background-color: lightgray;
//       }
//       button {
//         border: none;
//         border: 1px solid black;
//         background-color: darkgray;
//         border-radius: 12px;
//         padding: 10px;
//         width: 180px;
//         color: white;
//       }
//       button:hover {
//         background-color: lightgray;
//         color: black;
//         cursor: pointer;
//       }
//     </style>
//   </head>
//   <body>
//     <div class="flexContainer">
//       <div>
//         <input id="textInput" type="text" placeholder="Enter User-Mail" />
//       </div>
//       <small>@gmail.com should be present</small>
//       <div>
//         <input
//           id="textPassword"
//           type="password"
//           placeholder="Enter User-Password"
//         />
//       </div>
//       <small>Min 6 digit is required </small>
//       <div>
//         <input type="text" id="changeInput" />
//       </div>
//       <div>
//         <button id="btn_Id">Login</button>
//       </div>
//       <script src="./FormValidation.js"></script>
//     </div>
//   </body>
// </html> -->
