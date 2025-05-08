const nums = { num1: 10000, num2: 20000 }
let sum = 0
let multi = 0

const sumNums = () => {
  sum = 0
  for (let key in nums) {
    sum += nums[key]
  }
}

const multiNums = () => {
  multi = 1
  for (let key in nums) {
    multi *= nums[key]
  }
}

sumNums()
multiNums()

console.log(`기본: nums: ${JSON.stringify(nums)}, sum: ${sum}, multi: ${multi}`)
nums["num3"] = 3
console.log(`추가: nums: ${JSON.stringify(nums)}, sum: ${sum}, multi: ${multi}`)

// TODO: proxy를 이용해서 nums의 속성이 수정되거나 추가될 때 sum과 multi가 계산되도록 처리하시오.
//  값을 출력할 때는 천단위 구분자를 적용해보자.

// END
