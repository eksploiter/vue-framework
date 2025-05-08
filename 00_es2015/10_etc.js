// 함수 매개변수의 기본 값 설정
function createUser(name, age = 20, role = "user") {
  return {
    name,
    age,
    role,
    createdAt: new Date(),
  }
}
const user1 = createUser("Alice") // { name: 'Alice', age: 20, role: 'user', createdAt: Date }

const user2 = createUser("Bob", 30) // { name: 'Bob', age: 30, role: 'user', createdAt: Date }

const user3 = createUser("Charlie", 25, "admin") // { name: 'Charlie', age: 25, role: 'admin', createdAt: Date }

// Template literal
const userName = "홍길동"
const greeting = `안녕하세요, 
저는 ${userName}이고 ${age}살입니다.`

// class
class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
  }

  sayHello() {
    return `안녕하세요, 저는 ${this.name}이고 ${this.age}살입니다.`
  }

  static create(name, age) {
    return new Person(name, age)
  }
}
