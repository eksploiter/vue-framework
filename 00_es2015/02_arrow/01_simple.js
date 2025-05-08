// 기존 함수 표현식
const add = function (a, b) {
  return a + b;
};

// 화살표 함수
const addArrow = (a, b) => a + b;

// this 바인딩 차이
const person = {
  name: "Alice",
  sayHello: function () {
    setTimeout(function () {
      console.log("Hello, " + this.name, this);
    }, 100);
  },
  sayHelloArrow: function () {
    setTimeout(() => {
      console.log("Hello, " + this.name, this);
    }, 100);
  },
};
console.log(person.sayHello());
console.log(person.sayHelloArrow());
