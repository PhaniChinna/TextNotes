// Manipulation Data With array and String Function

const fruits = ["Mango", "Apple", "kiwi", "Banana"];

const ages = [
  { emp: "Phani", age: 25 },
  { emp: "Pavan", age: 67 },
  { emp: "Ravi", age: 23 },
];
let empDetails;
// map function [Transformining Data]

const fruits_map = fruits.map((item) => item + " " + "?");
console.log(fruits_map);

const age_map = ages.map((itemD, { emp: string, age: number }) => {
  return {
    empDetails: itemD.emp + " is Age " + itemD.age,
  };
});
console.log(age_map);

// For each Loop
// Manipulation Data With array and String Function

const fruits = ["Mango", "Apple", "kiwi", "Banana"];

const ages = [
  { emp: "Phani", age: 25 },
  { emp: "Pavan", age: 67 },
  { emp: "Ravi", age: 23 },
];
let empDetails;
// map function [Transformining Data]

const fruits_map = fruits.map((item) => item + " " + "?");
console.log(fruits_map);

const age_map = ages.map((itemD, { emp: string, age: number }) => {
  return {
    empDetails: itemD.emp + " is Age " + itemD.age,
  };
});
console.log(age_map);

const getResult = ages.forEach((itemL) => console.log(itemL));
console.log(getResult);

// For each Loop

const dataList = ["Apple", "PineApple", "Kiwi"];
//console.log(dataList)
const result = dataList.forEach((item) => console.log(item));
console.log(result);

const marksd = [
  {
    subject: "English",
    marks: 50,
  },
  {
    subject: "Hindi",
    marks: 69,
  },
  {
    subject: "Science",
    marks: 90,
  },
];

const get = marksd.reduce(function (totalMarks, initialMark) {
  return totalMarks + initialMark.marks;
}, 0);

console.log(get);

// Using Strings

const firstName = "Phanindhar";
const lastName = "Reddy";

console.log(`${firstName}-${lastName}`);
const get = firstName.concat(" " + lastName);
console.log(get);

const greeting = "Hello     World ";
console.log(greeting.trim());

const SpecialKey = "COUNTRY_0";
console.log(SpecialKey.split("_")[0]);
