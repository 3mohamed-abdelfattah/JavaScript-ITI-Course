var x = 2
var y = 1
console.log(x, y)
console.log(x += y)
console.log("------------------------------------------");

x = true
y = false
console.log(x, !x, x || y, x && y)
console.log(1 && 8 && 0 && 3);
console.log(1 && 8 && 9);
console.log("------------------------------------------");

var ternary = 101,
    newternary = (ternary > 100) ? "red" : "green"
console.log(newternary);
console.log("------------------------------------------");
