// Error Handling
//try {
// to pass certain logic
//}catch(error){
// show some error
//Throw err
//}finally {
// code was finally
// the fallback written in finally block
//}

// Error Handling Part 2

// try
// catch
//finally
// throw

var X = 10;

try {
  if (x % 2 === 0) {
    console.log("Prime Number");
  }
} catch (error) {
  console.log("error");
}

// var x = 10
// try {
//   const result = x.toPrecision(5)
//   console.log(result)
// }catch(error){
//   // throw error.name
//   throw "Error : While setting precision to X"
// }

var x = 5;
var y = 10;
try {
  x = z + 1 * 2;
  console.log(x);
} catch (err) {
  console.log(err.name);
} finally {
  console.log("Failerd to convert ");
}
