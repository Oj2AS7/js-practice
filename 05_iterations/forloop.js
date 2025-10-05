// for loop
for (let i = 0; i < 5; i++) {
  console.log("Iteration number: " + i);
  if (i === 3) {
    console.log("Breaking the loop at i = " + i);
    break; // breaks the loop
  }
  else if(i === 1){
    console.log("1 is the best number")
  }
  else if(i === 1){
    console.log("Continuing the loop at i = " + i);
    continue; // skips the current iteration and continues with the next iteration
  }
    //This will not be printed when i is 1 or 3
}

array = [10, 20, 30, 40, 50];
// iterating over an array using for loop
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    console.log("Element at index " + index + ": " + element);
}


for (let i = 1; i <11; i++) {
    console.log(`Outer loop iteration: ${i}`);
    for(let j = 1;j<11;j++){
        console.log(`Inner loop iteration: ${j} and i is ${i}`); // nested loop
    }
}


let myarray = ['a', 'b', 'c', 'd', 'e'];
for(let i = 0;i<myarray.length;i++){
    console.log(`Element at index ${i} is ${myarray[i]}`);
}

// looping through a string
let myString = "Hello, World!";
for(let i = 0;i<myString.length;i++){
    console.log(`Character at index ${i} is ${myString[i]}`);
}

// looping through an object
let myObject = {
    name: "John",
    age: 30,
    city: "New York"
};
for(let key in myObject){
    console.log(`Key: ${key}, Value: ${myObject[key]}`);
}

// looping through a set
let mySet = new Set([1, 2, 3, 4, 5]);
for(let item of mySet){
    console.log(`Set item: ${item}`);
}

// for of loop
//["","",""]
//[{},{},{}]

const arr = [10, 20, 30, 40, 50];
for (const value of arr) {
  console.log("Value: " + value);
}

const str = "Hello Ojas";
for (const char of str) {
  console.log("Character: " + char);
}

// For in loop
// The for...in statement iterates over all enumerable properties of an object that are keyed by strings (ignoring ones keyed by Symbols).
// It is recommended to use for...in loops only with objects and not with arrays where the index order is important.
// If you need to iterate over the values of an array, use a for...of loop or a standard for loop instead.  

const myobj = {
  js : "JavaScript",
  py : "Python",
  rb : "Ruby",
  java : "Java",
  cpp : "C++"
}

// if we want only keys actually for in loops works on keys
for (const key in myobj) {
  console.log("Key: " + key);
}

// if we want only values we have to use the key to get the value from the object
for (const key in myobj) {
  console.log("Value: " + myobj[key]);
}

// if we want both keys and values

for (const key in myobj) {
  console.log(`${key} is the shortcut of ${myobj[key]}`);
}









// Difference between for...of and for...in
//for...of and for...in are both loops in JavaScript, but they are used for different purposes:

// for...of
// Iterates over the values of iterable objects (arrays, strings, sets, maps).
// Gives you each element directly.
// Example:
// const arr = [10, 20, 30];
// for (const value of arr) {
//   console.log(value); // 10, 20, 30
// }
// for...in
// Iterates over the keys (property names) of an object.
// Gives you each key as a string.
// Example:
// const obj = { a: 1, b: 2 };
// for (const key in obj) {
//   console.log(key); // "a", "b"
//   console.log(obj[key]); // 1, 2
// }
// Summary:

// Use for...of for arrays, strings, and other iterables (values).
// Use for...in for objects (keys).