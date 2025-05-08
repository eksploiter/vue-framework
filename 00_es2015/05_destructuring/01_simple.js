// 객체 구조 분해
const customer = {
  cname: "김영희",
  age: 28,
  job: "디자이너",
  address: {
    city: "서울",
    district: "강남구",
  },
};
const { cname, age, job, address } = customer;
console.log(cname); // '김영희'
customer.address.city = "광주";
console.log(address);

const {
  cname: cname2,
  //job,
  address: { city },
} = customer;
console.log(cname2, city);

// 배열 구조 분해
const numbers = [1, 2, 3, 4, 5];
const [first, second, ...rest] = numbers;
console.log(first); // 1
console.log(second); // 2
console.log(rest); // [3, 4, 5]
