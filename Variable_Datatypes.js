var x
console.log(x);
console.log(typeof x);
console.log("------------------------------------------");

x = 10
console.log(x);
console.log(typeof x);
console.log("------------------------------------------");

x = "Hello world"
console.log(x);
console.log(typeof x);
console.log("------------------------------------------");

x = true
console.log(x);
console.log(typeof x);
console.log("------------------------------------------");

x = null
console.log(x);
console.log(typeof x);
console.log("------------------------------------------");

// Avoid Coercion by using ==== strict equality or brackets
console.log(3 < 2);
console.log(3 < 2 < 1); // HOW !!  because the javascript engine coerces data type
console.log(3 < (2 < 1)); // solve by using brackets
var x = 5, y = "5"
console.log(x == y); //engine coerces data type
console.log(x === y); //engine not coerces data type

console.log("------------------------------------------");
