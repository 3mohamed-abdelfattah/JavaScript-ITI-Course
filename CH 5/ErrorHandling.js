try {
    x = 5
    if (x === 5) {
        throw "Error Invalid"
    } else {
        console.log("DONE!")
    }
} catch (error) {
    if (error instanceof SyntaxError) {
        console.log("Error: " + x + " Type: " + error)

    } else {
        console.log("Not SyntaxError " + typeof error)
    }
} finally {
    console.log("Always Done!")
}

console.log("----------------------------------------------------------------")

try {
    x = 6
    if (x === 5) {
        throw "Error Invalid"
    } else {
        console.log("DONE!")
    }
} catch (error) {
    console.log("Error: " + x + " Type: " + error)
} finally {
    console.log("Always Done!")
}

console.log("----------------------------------------------------------------")
