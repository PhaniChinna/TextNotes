//console.log(window.setTimeout);

//setTimeout  : Function
// which help to Perform
//  after some Duration

// function Greet() {
//   console.log("Hello From the JavaScript setTimeOut");
// }

// setTimeout(function () {
//   Greet();
// }, 3000);

// window.console.log("Hello from the console after setTimeout");

let currentInterval;
const randomNumber = () =>
  (currentInterval = setInterval(function () {
    window.console.log(`Random Number ${Math.floor(Math.random() * 100)}`);
  }, 1000));

const startIntervalTime = document.getElementById("StartInterval");
const stopIntervalTime = document.getElementById("StopInterval");

startIntervalTime.addEventListener("click", function () {
  randomNumber();
});

stopIntervalTime.addEventListener("click", function () {
  if (currentInterval) {
    clearInterval(currentInterval);
  }
});
