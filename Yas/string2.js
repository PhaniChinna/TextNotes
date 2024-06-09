// lastIndexOf
// indexof
// search
// match , matchAll

var greetings = "Hello, how are you doing are you are good ?";

console.log(greetings.lastIndexOf("?")); // if Value Present in string it shows a index number or else -1

console.log(greetings.indexOf("are"));
console.log(greetings.search("g"));
console.log(Array.from(greetings.matchAll("are")));
