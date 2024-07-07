var x = "abd101"
console.log(parseInt(x));
console.log("--------------------------------")

var x = "101abd"
console.log(parseInt(x));
console.log("--------------------------------")

var x = "101.789abd"
console.log(parseFloat(x));
console.log("--------------------------------")

var x = "0110"
console.log(parseInt(x, 2));
console.log("--------------------------------")

var x = 2
console.log(isFinite(x));
console.log("--------------------------------")

var x = 2
console.log(isNaN(x));
console.log("--------------------------------")

// Custom Functions
plusTwo(undefined, 42)
function plusTwo(x, y) {
    x = (x == undefined) ? 0 : x;
    console.log(x + y)
    console.log("--------------------------------")
}

