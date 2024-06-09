// splice() ===> add new items
// slice() ====> slice out a piece of an array

// Splice({startInteger} , {RemoveItem} , {AddItem})
const number = [1, 2, 3, 4, 5];
// number.splice(5 , 0 ,6,7,8) //[5 ---< starting [ 0 --> romove , // [6.. --->Add Number]]]
// console.log(number)
// number.splice(1,1) // Remove item
const R = number.slice(0, 1); //  start and end its display
console.log(R);
