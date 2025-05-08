//
let users = [{ name: "hong gil dong", email: { id: "hong", domain: "def.net" } }, { name: "jang gil san" }];

users.forEach((user) => {
  // 무작성 사용하면 안된다.
  console.log(user);
  // console.log(user.name, user.email.id, user.email.domain);
});

users.forEach((user) => {
  console.log(user.name, user.email ? user.email.id : undefined, user.email ? user.email.domain : "undefined");
});
users.forEach((user) => {
  console.log(user.name, user.email?.id, user.email?.domain);
});

let trueOrFalse = false;
let input1 = trueOrFalse || "값누락";
let input2 = trueOrFalse ?? "값누락";
console.log(input1 == "값누락" ? "필수항목입니다." : `${input1}을 선택하셨군요`); // 필수항목
console.log(input2 == "값누락" ? "필수항목입니다." : `${input2}을 선택하셨군요`); // false을 선택하셨군요

let age = 0;
input1 = age || "값누락";
input2 = age ?? "값누락";
console.log(input1 == "값누락" ? "필수항목입니다." : `${input1}살이군요`); // 필수항목
console.log(input2 == "값누락" ? "필수항목입니다." : `${input2}살이군요`); // 0살이군요
