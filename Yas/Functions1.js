//ES 5

function GreetCustomer(CustomerNamer = "Customer") {
  console.log("Hello " + CustomerNamer);
}

GreetCustomer();
GreetCustomer("Tom 1");
GreetCustomer("Tom 2");
GreetCustomer("Tom 3");
GreetCustomer("Tom 4");
GreetCustomer("Tom 5");

function ValidAge(age) {
  return age > 18 ? true : false;
}

var Person1 = ValidAge(14);
console.log(Person1);

var Person2 = ValidAge(27);
console.log(Person2);

// Anoymous Function

var newFunction = function (marks) {
  return marks % 2 === 0 ? "Pass" : "Failed";
};

console.log(newFunction(100));
