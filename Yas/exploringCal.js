const btn_1 = document.getElementById("1_btn");
const btn_2 = document.getElementById("2_btn");
const btn_3 = document.getElementById("3_btn");
const btn_4 = document.getElementById("4_btn");
const btn_5 = document.getElementById("5_btn");
const btn_6 = document.getElementById("6_btn");
const btn_7 = document.getElementById("7_btn");
const btn_8 = document.getElementById("8_btn");
const btn_9 = document.getElementById("9_btn");
const btn_0 = document.getElementById("0_btn");
const display = document.getElementById("InputDisplay");

let display_content = 0;
display.value = display_content;

btn_1.addEventListener("click", function () {
  display.value = 1;
});
btn_2.addEventListener("click", function () {
  display.value = 2;
});
btn_3.addEventListener("click", function () {
  display.value = 3;
});
btn_4.addEventListener("click", function () {
  display.value = 4;
});
btn_5.addEventListener("click", function () {
  display.value = 5;
});
btn_6.addEventListener("click", function () {
  display.value = 6;
});
btn_7.addEventListener("click", function () {
  display.value = 7;
});
btn_8.addEventListener("click", function () {
  display.value = 8;
});
btn_9.addEventListener("click", function () {
  display.value = 9;
});
btn_0.addEventListener("click", function () {
  display.value = 0;
});
