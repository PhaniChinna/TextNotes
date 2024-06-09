var fullName = "Phanindhar Reddy"; // Global;

// {
//   var age  //
// }
function greet1() {
  var fullName = "Phani"; // More Precedence  Local Scope
  var age = 87;
  console.log(age);
  console.log(fullName);
}

function greet2() {
  fullName = "Phanindhar Yarram ";
  console.log(fullName);
}

greet1();
greet2();
greet1();

function num1(number1) {
  const result = number1 * 2; // Global
  function num2() {
    return result * 3; // Local
  }
  const rest = num2();
  console.log(rest);
}

num1(10);
