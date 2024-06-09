// ES6 Arrow Function

function printFullName(FirstName, LastName) {
  console.log(FirstName + " " + LastName);
}

printFullName("Phanindhar", "Reddy");

//syntax arrow function
const PrintFLName = (fName, LName) => {
  console.log(fName + " " + LName);
};
PrintFLName("Phanindhar", "Reddy Yarram");

// Function Inside the Function

function ProviderNumber1(number) {
  return function ProviderNumber2(number1) {
    return parseInt(number) + parseInt(number1);
  };
}

const result = ProviderNumber1(10); // first Function
console.log(result(20)); // return to Second Function
