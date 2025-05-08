import { name, add, addr as myaddr, age } from "./export_multi.js";
import greeting from "./export_default.js";

console.log(name, myaddr, age);

greeting.sayHello.kor(name);

export { name, add, myaddr, age, greeting };
