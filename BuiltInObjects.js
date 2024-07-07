
var str1 = "A"
var str2 = new String("B")
var str3 = String("C")
console.log(typeof str1, str1.length)
console.log(typeof str2)
console.log(typeof str3)
console.log("----------------------------------------------------------------")

var str4 = "Welcome to the world with the ability to Manipulate"
console.log(str4.charAt(str4.length - 1), str4.length)
console.log("------------------------")
console.log(str4.indexOf("M"))
console.log("------------------------")
console.log(str4.substring(3, 23))
console.log("------------------------")
console.log(str4.split(""))
console.log(str4.split(" "))
console.log(str4.split("e"))
console.log("------------------------")
console.log(str4.replace("e", "_"))
console.log("------------------------")

// Use RegExp
console.log(str4.replace(/e/g, "_"))
console.log("------------------------")

console.log(str4.replace(/e/i, "_"))
console.log("------------------------")

console.log(str4.replace(/e/g, "_"))
console.log("------------------------")

//Arrays
var arr = [1, 2, 4, 1, 32, "d", "e", "f", false, ["wd", 42]];
console.log(arr)
console.log(arr.length)
console.log("------------------------")
console.log(arr[9][1])
console.log("------------------------")
arr[0] = 25
console.log(arr)
console.log("------------------------")
console.log(arr.join("+"))
console.log("------------------------")
console.log(arr.pop())
console.log(arr)
console.log("------------------------")
arr.push("NEW")
console.log(arr)
console.log("------------------------")

console.log(arr.sort())
console.log(arr.sort(sorting))

function sorting(a, b) {
    return a - b
}

console.log("------------------------")

//Associative Array

var AssociativeArray = new Array();
AssociativeArray["0"] = 10
AssociativeArray["1"] = 20
AssociativeArray["2"] = 30
AssociativeArray["3"] = 40
AssociativeArray["4"] = 50
console.log(AssociativeArray)
console.log(AssociativeArray[0])
console.log(AssociativeArray[4])
console.log(AssociativeArray[23])
console.log(AssociativeArray[20])
console.log("------------------------")

for (i in AssociativeArray) {
    console.log(i + "  ------->  " + AssociativeArray[i])
}


console.log("------------------------")

//Date
var date = new Date
console.log(date)
console.log(date.getTime())
console.log(date.getFullYear())
console.log(date.getYear()) // ADD 1900
console.log(date.getMonth())
console.log(date.getDay())
console.log(date.getDate(), date)
console.log(date.setDate(21), date)
console.log("------------------------")
console.log(date.toDateString())
console.log(date.toTimeString())
console.log(date.toLocaleDateString())
console.log(date.toLocaleTimeString())
console.log(date.toISOString())

