// quiz 01.
// const frontend = ["React", "Vue"];
// const backend = ["Node", "Spring"];
// const fullstack = ["Start", ...frontend, "Middle", ...backend, "End", frontend, backend];

// console.log(fullstack.length);

// quiz 02.
// function calculateSum(a, b, c) {
//   return a + b + c;
// }

// const numbers = [10, 20, 30, 40]; // 요소 개수가 파라미터 개수보다 많음
// const sum = calculateSum(...numbers);

// console.log(sum);

// quiz 03.
const defaults = { theme: "light", notifications: true, layout: "compact" };
const userPreferences = { notifications: false, theme: "dark" };

const finalSettings = { ...defaults, ...userPreferences, userId: "abc" };

console.log(Object.keys(finalSettings).length, finalSettings);
