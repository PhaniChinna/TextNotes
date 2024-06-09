// //console.log("Hello World");
// // sets its not allow to share Duplicates
// const mySet = new Set();
// // mySet.add(1);
// // mySet.add(2);
// // mySet.add(1); // of three add only once
// // mySet.add({
// //   name: "Phani",
// //   age: 23,
// // });
// // mySet.add({
// //   name: "Ravi",
// //   age: 45,
// // });
// // mySet.add({
// //   name: "Phani",
// //   age: 23,
// // });                  // add therese

// // const p1 = { name: "Phani", age: 23 };
// // mySet.add(p1);
// // mySet.add(p1);
// // console.log(mySet);

// // mySet.add([1, 2, 3, 4, 5]);
// // mySet.add([1, 2, 3, 4, 5]);

// const Array1 = [1, 2, 3, 4, 5];

// mySet.add(Array1);
// mySet.add(Array1);
// // mySet.delete(Array1);
// // mySet.clear();
// mySet.forEach((element) => console.log(element));
// //console.log(mySet);

// Maps

const myMap = new Map([
  ["THEME", "Dark"],
  ["IsLoggedIn", true],
]);

// myMap.forEach((key, element) => {
//   console.log(key, element);
// });
//set is used to add
myMap.set("isLog", false);

//console.log(myMap.entries().next());
console.log(myMap.get("THEME"));
