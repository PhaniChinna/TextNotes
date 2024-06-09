var firstName = "Phanindhar";
var lastName = "Reddy";

var RandomText = "      Uday     ";

console.log(firstName.length, lastName.length);
console.log(firstName.slice(1, 6)); // etract char (start , end)
console.log(firstName.substring(1, 8)); // same like slice
console.log(firstName.substr(-8)); // xtarxt
console.log(lastName.replaceAll("Reddy", "Samrin"));
console.log(lastName.toUpperCase());
console.log(lastName.toLowerCase());
console.log(firstName + " " + lastName);
console.log(firstName.concat(" " + lastName + " " + "Helli"));

console.log(RandomText.trim());
