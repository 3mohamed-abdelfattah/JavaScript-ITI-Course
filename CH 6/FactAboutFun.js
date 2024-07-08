
var funAnonymous = function (a, b) {
    return a + b;
}
console.log(funAnonymous(3, 2));
console.log("----------------------------------------------------------------");

//Assign the function in Array
var arr = [1, 2, 3, function (a, b) {
    return a + b;
}, 4, 5]

var fun = arr[3](7, 28)
console.log(fun);
console.log("----------------------------------------------------------------");

//Function inside Function
function One(a, b, c) {
    return function () {
        return a + b + c;
    }
}

var result = One(1, 2, 3)
console.log(result());
console.log("----------------------------------------------------------------");