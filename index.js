// console.log("hello world!");
// 0;
// 9 /*數字*/;
// ("use strict"); /*字串*/
// true;
// false;
// /*變數的更新與輸出*/
// let number = 2; // .toFixed(2) // "2.00" 2 "2.01" 2.01
// const name = "ulinnn";
// number = 3;
// let temp = number;
// console.log(temp);
// number = 4;
// temp = number;
// console.log(name);
// /*變數交換*/
// let a = 10;
// let b = 20;
// let c;
// c = a;
// a = b;
// b = c;
// console.log(a, b);
// /*邏輯運算子*/
// a = 10;
// b = 20;
// console.log(a == 10);
// console.log(a != 10);
// console.log(a == 10 && b == 20);
// console.log(a == 10 || b == 10);
// console.log(a <= 10 && b >= 20);
// /*算術運算子*/
// console.log(10 + 5);
// console.log(9 - 4);
// console.log(8 * 3);
// console.log(7 / 2);
// console.log(6 % 1);
// console.log("1" + "1");

// if (a == 10) {
//   console.log("a is 10");
//   console.log("a is 15");
// } else {
//   console.log("ais notequal 10 anf 15");
// }

// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }
// console.log("bye");
// /*方法*/
// let double = function (num) {
//   /* num = num || 1 如果沒有傳入參數，預設為1 */
//   return num * 2;
// }; /*num=參數*/
// console.log(double(2));

// // let c = double(2, 3);
// console.log(c);
// let sayMyName = function (name) {
//   console.log("my name is" + name);
// };
// sayMyName("jac");
// sayMyName("mary");
// sayMyName("mimg");
// sayMyName("john");

// let n = 0;
// for (let i = 0; i <= 100; i++) {
//   /* i+1(數學邏輯) = i++(程式編碼) */
//   n = n + i;
// }
// console.log(n);
window.onload = function () {
  console.log(document.querySelector("#year"));
  document.querySelector("#year_btn").addEventListener("click", function () {
    const year = parseInt(document.querySelector("#year").value);
    // 該年分為400的倍數，或者為4的倍數，但不可以是100的倍數
    if (year % 400 == 0 || (year % 4 == 0 && year % 100 !== 0)) {
      result = "閏年";
    } else {
      result = "不是閏年";
    }
    console.log(year);
    document.querySelector("#answer").innerHTML = year;
  });
};

const isTriangle = function (a, b, c) {
  return a + b > c && a + c > b && b + c > a;
};
// 三角形特性，兩邊相加大餘第三邊
console.log(isTriangle(1, 2, 3)); // false
console.log(isTriangle(3, 4, 5)); // true

const countBMI = function (height, weight) {
  // 體重/身高平方(M)
  return weight / (height * height);
};
let bmi = countBMI(1.6, 50);
console.log(bmi);
console.log(countBMI(1.6, 50));

// 判斷大小的函式
const whichISBig = function (a, b) {
  if (a > b) {
    return a;
  } else if (b > a) {
    return b;
  }
};
whichISBig(1, 2);

// 成績判斷計算表
// 95-100(是)return A+
// 90~94(是)return A
// 80~89(是)return B
// 70~79(是)return C
// 0~69(是)return D
const checkScore = function (score) {};

// 用迴圈做九九乘法表
