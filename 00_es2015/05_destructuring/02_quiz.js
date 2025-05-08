// quiz 01.
// const colors = ["red", "green", "blue", "yellow"];
// const [primary, secondary, ...otherColors] = colors;

// console.log(primary);
// console.log(otherColors.length);

// quiz 02.
// const product = { id: "p100", stock: 20 };
// const { id: productID, name: productName = "Default Name", stock } = product;
// console.log(productID, productName, stock);

// quiz 03.
function printCoordinates({ x, y = 0, z: a }) {
  console.log(`X: ${x}, Y: ${y}, Z: ${a}`);
}
printCoordinates({ x: 10 });
