// const Person = ["Ram", "Shays", "Gautama"];
// console.log(Person);
// DB 1) mySQL 2) Oracle  3) fireBase

// LocalStorage [never expire]
// Cookies []
// sessionStorage

// we have to learn every thing in MDN

// console.log(window.localStorage);
// console.log(window.sessionStorage);
// console.log(window.Cookies);

// LocalStorage

// class LocalStoragesJS {
//   saveDataToLocalStorage(key, Value) {
//     window.localStorage.setItem(key, JSON.stringify(Value));
//   }
//   fetchFromLocalStorage(key) {
//     return JSON.parse(window.localStorage.getItem(key));
//   }
//   clearLocalStorage() {
//     window.localStorage.clear();
//   }
//   removeFromLocalStorage(key) {
//     window.localStorage.removeItem(key);
//   }
// }

// SessionStorage

// class SessionStorageJs {
//   saveDataToSessionStorage(key, Value) {
//     window.sessionStorage.setItem(key, JSON.stringify(Value));
//   }
//   fetchFromSessionStorage(key) {
//     return JSON.parse(window.sessionStorage.getItem(key));
//   }
//   clearSessionStorage() {
//     window.sessionStorage.clear();
//   }
//   removeFromSessionStorage(key) {
//     window.sessionStorage.removeItem(key);
//   }
// }

// const Local1 = new SessionStorageJs();
// Local1.saveDataToSessionStorage("DATE", new Date());
// Local1.saveDataToSessionStorage("DATE_2", new Date().getTime());
// const getDate = Local1.fetchFromSessionStorage("DATE");
// const h1 = document.querySelector("h1");
// 17531;
// h1.innerText = getDate;

// const btn = document.querySelector("button");

// // btn.addEventListener("click", function () {
// //   Local1.removeFromSessionStorage("DATE");
// // });

// btn.addEventListener("click", function () {
//   Local1.clearSessionStorage("DATE");
// });

// cookieStorage

// console.log(window.document.cookie);

// console.log((document.cookie = "userName = John ; expires = 20 "));
