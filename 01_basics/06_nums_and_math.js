const score = 400
console.log(score);

const balance = new Number(100)
console.log(balance);

console.log(balance.toString())
console.log(balance.toFixed(3));

//const othernumber = 23.8966
//const othernumber = 123.8966
const othernumber = 1123.8966
console.log(othernumber.toPrecision(3));  //must have range between 1 - 21 returns the string

const hundreds = 10000000
console.log(hundreds.toLocaleString()) //converts in US standards this number would be like this 10,000,000
// if we want to convert in indian standard 
console.log(hundreds.toLocaleString('en-IN'))

// to get max value and min value possible in js
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);

// these are the max and min safe integers in js
// safe integers are the integers that can be represented accurately in JavaScript
// beyond these values, JavaScript may not be able to represent the number accurately
// safe integers are between -2^53 + 1 and 2^53 - 1
// these values are used to prevent precision errors in calculations
// MAX_SAFE_INTEGER is 2^53 - 1 and MIN_SAFE_INTEGER is -(2
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);

// +++++++++++++++++++++MATHS++++++++++++++++++++++++++

// JavaScript provides a built-in Math object that has properties and methods for mathematical constants and functions
// The Math object is not a constructor, so you cannot create an instance of it
// Instead, you can use the Math object directly to access its properties and methods
// The Math object provides a wide range of mathematical functions, such as trigonometric functions,
// logarithmic functions, and random number generation
console.log(Math);
console.log(Math.abs(-5)); // returns the absolute value of a number
console.log(Math.ceil(5.1)); // rounds a number up to the nearest integer
console.log(Math.floor(5.9)); // rounds a number down to the nearest integer
console.log(Math.round(5.5)); // rounds a number to the nearest integer
console.log(Math.trunc(5.9)); // removes the decimal part of a number
console.log(Math.random()); // returns a random number between 0 and 1
console.log(Math.random() * 10); // returns a random number between 0 and 10
console.log(Math.random() * 100); // returns a random number between 0 and 100
console.log((Math.random() * 100) + 1); // returns a random number between 1 and 100 we use +1 to avoid 0 values
console.log(Math.min(3, 2, 1, 4, 5)); // returns the minimum value from a list of numbers
console.log(Math.max(1, 5, 3, 4, 2)); // returns the maximum value from a list of numbers
console.log(Math.pow(2, 3)); // returns the value of a number raised to the power of another number (2^3 = 8)
console.log(Math.sqrt(16)); // returns the square root of a number (4)
console.log(Math.PI); // returns the value of pi (3.141592653589793)
console.log(Math.E); // returns the value of e (2.718281828459045)

const min = 10
const max = 20
Math.random() * (max - min) + 1; // returns a random number between min and max
console.log(Math.floor(Math.random() * (max - min + 1)) + min); // returns a random integer between min and max (inclusive)

