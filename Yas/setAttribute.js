// <input type = "text"  name = "userName"
//placeholder = "Enter userName" />

const InputField = document.querySelector("input");
InputField.setAttribute("type", "text");
InputField.setAttribute("name", "UserName");
InputField.setAttribute("Placeholder", "Enter Your UserName");
InputField.setAttribute("value", "Phani");
InputField.setAttribute(
  "data-person",
  JSON.stringify({ pName: "Phani", pAge: 14 })
);

InputField.addEventListener("focus", function () {
  const person = InputField.getAttribute("data-person");
  window.alert(person);
});

// const InputField1 = document.getElementById("IpPassword");
// InputField1.setAttribute("type", "password");
// InputField1.setAttribute("name", "UserPassword");
// InputField1.setAttribute("placeholder", "Enter Your Password");
// console.log(InputField1);
