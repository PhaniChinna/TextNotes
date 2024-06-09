const rootDiv = document.getElementById("root");
const URl = "https://jsonplaceholder.typicode.com/todos";

fetch(URl, {
  method: "GET",
})
  .then((response) => {
    if (response.status !== 200) {
      throw new Error("Failed to send Request");
    }
    return response.json();
  })
  .then((data) => {
    data
      .forEach((ele) => {
        rootDiv.innerHTML += "<h1>" + JSON.stringify(ele) + "</h1>";
      })
      .catch((ero) => window.alert(ero));
  });
