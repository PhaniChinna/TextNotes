// what is difference b/w
// innerText
// innerHtml

const div = document.getElementById("root");
const innerTextButton = document.getElementById("innerText");
const innerHTMLButton = document.getElementById("innerHTML");
console.log({
  div,
  innerTextButton,
  innerHTMLButton,
});

innerTextButton.addEventListener("click", function () {
  div.innerText = "   <select><option>One</option></select>";
});

innerHTMLButton.addEventListener("click", function () {
  div.innerHTML = "One";
});
