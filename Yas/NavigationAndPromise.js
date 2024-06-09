// Promises

const inputText = document.querySelector("input");
const buttonText = document.querySelector("button");

function myPromise(age) {
  return new Promise((resolve, reject) => {
    if (age >= 18) {
      resolve("Yours age is Valid");
    } else {
      reject("You age is invalid");
    }
  });
}

buttonText.addEventListener("click", function () {
  myPromise(inputText.value)
    .then((res) => window.alert("Then Block:  " + res))
    .catch((err) => window.alert("Catch Block:  " + err))
    .finally((res) => console.log("I will Run"));
});
