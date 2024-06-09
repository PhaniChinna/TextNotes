const fruits = ["Mango", "Apple", "kiwi", "Watermelon"];
const firstName = new String("Phani");
const mydate = new Date();
// console.log(fruits instanceof Object) ;
// console.log(fruits instanceof Array) ;
// console.log(fruits instanceof String) ;
// console.log(fruits instanceof Number) ;
// console.log(fruits instanceof Boolean) ;
looger(mydate);
looger(fruits);
looger(firstName);

function looger(element) {
  console.log(element);
  console.log(element instanceof Object);
  console.log(element instanceof Array);
  console.log(element instanceof String);
  console.log(element instanceof Number);
  console.log(element instanceof Boolean);
  console.log(element instanceof Date);
  console.log("//////////////////////! " + element);
}
