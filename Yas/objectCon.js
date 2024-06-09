const school = new Object();
school.name = "GD Public School";
school.grade = "A+";
school.address = "New Delhi , India";
const school2 = new Object(undefined);

console.log(school2);

const students = new Object();
students.name = "Phani";
students.percentage = "78%";
students.greet = function () {
  return "Hello World";
};
console.log(students.greet()); // function inside the Object

const student = {
  name: "Phani",
  Percentage: "78%",
  greet: function () {
    return this.name + " Hello World"; // this indicates outside (function key Word)
  },
};
console.log(student.greet());

function Person(fName, lName, age, contactNumber) {
  (this.fName = fName),
    (this.lName = lName),
    (this.age = age),
    (this.contactNumber = contactNumber);
}

const p1 = new Person("Phani", "Reddy", 23, 9951032311);
console.log(p1);
