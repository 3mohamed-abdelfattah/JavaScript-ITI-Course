var x = true;

if (x) {
    console.log("True");
} else {
    console.log("false");
}

var type = "1"
switch (type) {
    case "1": // flow
    case "2": console.log("2");
        break;
    case "3": console.log("3");
        break;
    case "4": console.log("4");
        break;
    case "5": console.log("5");
        break;
    default: console.log("Not implemented");
}