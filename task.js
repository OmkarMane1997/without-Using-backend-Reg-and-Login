// const res1 = [];
// const res2 = [];
// const array = [1, "a", "b", 3, undefined, 8, null, "d"];
// for (let index = 0; index < array.length; index++) {
//   typeof array[index] == "number"
//     ? res1.push(array[index])
//     : typeof array[index] == "string"
//     ? res2.push(array[index])
//     : null;
// }
// console.log("res1", res1);
// console.log("res2", res2);

const array = [1, "a", "b", 3, undefined, 8, null, "d"];
console.log('res1:-',array.sort().slice(0,3))
console.log('res2:-',array.sort().slice(3,6))


let res1 = [];
let res2 = [];

// array.forEach((x) =>
//   typeof x === "number"
//     ? res1.push(x)
//     : typeof x === "string"
//     ? res2.push(x)
//     : null
// );



console.log("res1", res1);
console.log("res2", res2);
