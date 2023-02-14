// this is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}

// just a console log for ourselves.
console.log(sum(7,3))

// export the function to be used on other files 
// (similar to the keyword `export` when using webpack)
module.exports = { sum };

let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

let fromDollarToYen = (dollarAmount) => {
    return dollarAmount / 1.2 * 127.9;
}

function fromEuroToDollar(euroAmount) {
    return euroAmount * 1.206;
}

let fromYenToPound = (yenAmount) => {
    console.log("hello")
}