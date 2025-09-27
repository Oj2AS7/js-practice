//const email = "ojaskotiyal@gmail.com"
const email = ""  // but for [] and {} it will be true
if (email) {
    console.log("You have an email")
} else {
    console.log("You don't have an email")
}

// falsy values: false, 0, "", null, undefined, NaN, BigInt(0n)
// truthy values: true, any number (positive or negative), "0", "false", [], {}, " " (empty array and empty object and even empty space in string are truthy)
// all other values are truthy
// so be careful while checking for truthy and falsy values

if (email.length === 0) {// better way to check if string is empty or not
    console.log("You don't have an email")
}

const emptyObject = {}
if (Object.keys(emptyObject).length === 0) { // better way to check if object is empty or not
    console.log("Object is empty")
}
// nullish coalescing operator (??) - returns the right-hand side operand when the left-hand side operand is null or undefined, otherwise returns the left-hand side operand.
let val1 = 5??10; // val will be 5
console.log(val1);
let val2 = 5??10??15; // we can do this also // val will be 5
console.log(val2);
let val3 = null??10; // val will be 10
console.log(val3);
let val4 = undefined??10; // val will be 10
console.log(val4);
let val5 = 0??10; // val will be 0 because 0 is not null or undefined
console.log(val5);
let val6 = ""??"default"; // val will be "" because "" is not null or undefined
console.log(val6);
let val7 = false??true; // val will be false because false is not null or undefined
console.log(val7);

// Ternary operator
const age = 17;
const canVote = age >= 18 ? "You can vote" : "You cannot vote";
console.log(canVote);

// nested ternary operator
const age1 = 25;
const canVote1 = age1 < 18 ? "You cannot vote" : age1 >= 18 && age1 <= 65 ? "You can vote" : "You are too old to vote";
console.log(canVote1);