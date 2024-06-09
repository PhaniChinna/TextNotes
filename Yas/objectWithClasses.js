// 1) First Way
// const Person = {
//   firstName: "Phanindhar ",
//   lastName: "Reddy",
// }
// console.log(Person);

// 2)Second Way

// const Person = new Object();
// Person.firstName = "Phanindhar Reddy";
// Person.lastName = "Yarram";
// console.log(Person);
// https://youtu.be/IKjfnjPtO28?si=ohqjh-jjTCMZjVET

// Pure Object Oriented Programing

// class Persons {
//     public fistName!: string;
//     public lastName! : string;
//     constructor(fName : string , lName : string) {
//        this.fistName = fName;
//        this.lastName = lName;
//     }
//     public get fullName() {
//         return this.fistName + " " + this.lastName
//     }
// }
// Public means in Js is this

// 3) Way

function Person(firstName, lastName) {
  (this.firstName = firstName),
    (this.lastName = lastName),
    (this.fullName = function () {
      return this.firstName + " " + this.lastName;
    });
}

const NewPerson1 = new Person("Phanindhar", "Reddy");
const NewPerson2 = new Person("Pavan Kumar", "Reddy");

console.log(NewPerson1);
console.log(NewPerson2);

console.log(NewPerson1.fullName());
console.log(NewPerson2.fullName());
