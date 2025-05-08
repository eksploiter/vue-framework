// computed property name
let dynamicPropObj = {
  ["name" + "_1"]: "hong",
}
console.log(dynamicPropObj)

let oldDynamicPropObj = {}
oldDynamicPropObj["name" + "_1"] = "hong"
console.log(oldDynamicPropObj)

const keys = {key1:"HisNameIsVeryLongSoICantRemember", key2:"THE_MAX_LENGTH_OF_LINE", key3:"😀"}
const objWithKeys = {
  HisNameIsVeryLongSoICantRemember: "홍길동",
  [keys.key2]: 30,
  [keys.key3]: "seoul",
}
console.log(objWithKeys)
