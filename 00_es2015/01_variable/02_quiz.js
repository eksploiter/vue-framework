// quiz 01.
// let x = 1;

// function scopeTest() {
//   console.log(x); // 첫 번째 console.log
//   if (true) {
//     let x = 2;
//     console.log(x); // 두 번째 console.log
//   }
//   console.log(x); // 세 번째 console.log
// }
// scopeTest();
// console.log(x); // 네 번째 console.log

// quiz 02.
// var a = "global";
// console.log(a);
// function testHoisting() {
//   console.log(a); // local a의 hoisting 결과로 undefined

//   if (!a) {
//     var a = "local"; // 함수 스코프
//     console.log(a); // 두 번째 console.log
//   }

//   console.log(a); // 세 번째 console.log
// }

// testHoisting();
// console.log(a); // 네 번째 console.log

// quiz 03.
// let i = 100;

// for (let i = 0; i < 3; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, 0);
// }

// console.log(i);

// quiz 04.
// let value = "outer";

// function test(flag) {
//   console.log(value);
//   if (flag) {
//     console.log(value);
//     let value = "inner";
//     console.log(value);
//   }
// }

// try {
//   test(true);
// } catch (e) {
//   console.error(e.name, e.message);
// }
