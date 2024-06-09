//console.log("Hello World");

// JavaSCript  is  synchronous in Nature

// Asynchronous

const divRoot = document.getElementById("root");

// function fetchTodo() {
//   return fetch("https://jsonplaceholder.typicode.com/todos/1").then((result) =>
//     result.json()
//   );
// }

// // const result = fetchTodo();
// // divRoot.innerText = JSON.stringify(result);
// let result;
// fetchTodo().then(result);
// divRoot.innerText = JSON.stringify(result);

async function fetchTodo() {
  const Result = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  return await Result.json();
}

divRoot.innerText = "Loading.....";

// const result = fetchTodo();
// //divRoot.innerText = JSON.stringify(result);
// console.log(result);
fetchTodo().then((result) => {
  divRoot.innerText = JSON.stringify(result);
});
