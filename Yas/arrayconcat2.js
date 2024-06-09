// sorting
// const Fruits = ["Orange" , "Apple" , "Kiwi" , "Mango"]
// Fruits.sort()
// Fruits.reverse()
// console.log(Fruits)

// const axis = [22.2 , 12.9 , 1,4,100.45]
// axis.sort((a,b) => {return a - b})
// console.log(axis)

//
const axios = [99, 67, 45, 7867, 765];
axios.sort((a, b) => {
  return b - a;
});
console.log(axios);

const Result = [1, 2, 3, 4, 5, 6, 7, 8, 9];
Result.sort(function (a, b) {
  console.log(a, b, a - b);
  return a - b;
});

console.log(Result);

const Num = [9, 8, 7, 6];
Num.sort(function (a, b) {
  return a - b;
});
console.log(Num);

const Num1 = [1, 2, 3, 4, 5];
Num1.sort(function (a, b) {
  return a - b;
});

console.log(Num1);

const FinalResult = Num1.concat(Num);
console.log(FinalResult);
