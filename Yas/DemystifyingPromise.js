const getInput = document.querySelector("input");
const getBtn = document.querySelector("button");

function percentage(marks) {
  // 6 subjects
  return new Promise((resolve, reject) => {
    const percent = (marks / 600) * 100;

    if (percent <= 45) {
      reject("You are Failed 😟 ");
    } else {
      resolve("You are Passed 🥳🥳");
    }
  });
}

getBtn.addEventListener("click", function () {
  percentage(getInput.value)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
});

// percentage(getInput.value)
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));
