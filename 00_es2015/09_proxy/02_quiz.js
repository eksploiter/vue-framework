const user = {
  username: "hong gil dong",
  age: 30,
  email: "hong@abc.net",
}

// TODO: 다음의 요청 사항을 만족하도록 userProxy를 생성하세요. 각각의 상황을 위배하면 에러를 발생시킨다.
//  email을 조회할 수는 없다. - 조회 시 에러를 발생시킨다.
//  age는 숫자만 설정할 수 있다. - 부적절한 값 저장 시 에러를 발생시킨다.
//  속성이 삭제될 때 로그를 남긴다.
 const userProxy = new Proxy();

// END

console.log(userProxy.username)
// email을 조회해 봄
try {
  console.log(userProxy.email)
} catch (e) {
  console.log(e.name)
}
// age에 문자열을 할당해 봄
userProxy.age = 10
try {
  console.log((userProxy.age = "hong"))
} catch (e) {
  console.log(e.name + " : " + e.message + " : " + e.cause)
  console.log(e.stack) // printStackTrace
}
// username을 삭제해 봄
delete userProxy.username
console.log("삭제 후 ", userProxy, user)
