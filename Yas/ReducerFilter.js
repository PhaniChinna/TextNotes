// const someStudent = [
//   { name: "Sid", age: 14 },
//   { name: "Phani", age: 18 },
//   { name: "Pavan", age: 20 },
//   { name: "Sam", age: 21 },
// ];

// const AgeGreater = someStudent.filter((std) => {
//   return std.age > 18;
// });

// console.log(AgeGreater);

// const numbers = [1, 2, 3, 4, 5];
// const even = numbers.filter((item) => item % 2 === 0); // filter Item
// console.log(even);

// const marks = [
//   { subject: "English", marks: 75 },
//   { subject: "Hindi", marks: 85 },
//   { subject: "Maths", marks: 65 },
//   { subject: "Science", marks: 90 },
// ];

// function SummAllMarks(total, subj) {
//   return total + subj.marks;
// }
// const result = marks.reduce(SummAllMarks, 0);
// console.log(result);

// const Cricket = ["Sachin", "Dhoni", "Kohili", "David", "Kohili", "Dhoni"];
// console.log(Cricket);

const cricket = ["D", "S", "V", "S", "D", "V"];

const getResult = cricket.reduce(function (obj, cric) {
  if (!obj[cric]) {
    obj[cric] = 1;
  } else {
    obj[cric]++;
  }
  return obj;
}, {});

console.log(getResult);
