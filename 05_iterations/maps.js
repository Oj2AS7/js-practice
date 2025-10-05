// Maps
// A Map is a collection of keyed data items, just like an Object.
// That holds the key value pairs and remembers the original insertion order of the keys other than objects.
// Any value (both objects and primitive values) may be used as either a key or a value.
// No duplicate keys are allowed.

// Creating a Map
const myMap = new Map();
myMap.set("name", "John");
myMap.set("name", "John"); // duplicate key, will overwrite the previous value
myMap.set("age", 30);
myMap.set("city", "New York");
console.log(myMap);

// Getting values from a Map
console.log(myMap.get("name")); // John
console.log(myMap.get("age")); // 30
console.log(myMap.get("city")); // New York

// Checking for existence of a key
console.log(myMap.has("name")); // true
console.log(myMap.has("country")); // false

// Deleting a key-value pair
myMap.delete("age");
console.log(myMap.has("age")); // false

// Iterating over a Map
for (const [key, value] of myMap) {  // destructuring we have to use like this to seprate the keys and values
    //console.log(`Key: ${key}`); // if we want only key
    //console.log(`Value: ${value}`); // if we want only value
    console.log(`Key: ${key}, Value: ${value}`);
}

// Getting the size of a Map
console.log(myMap.size); // 2

// Clearing all entries in a Map
myMap.clear();
console.log(myMap.size); // 0

const obj = {
    a: 1,
    b: 2,
    c: 3
}

// for (const [key, value] of obj) {  // it will give error as obj is not iterable
//     console.log(`Key: ${key}, Value: ${value}`);
// }

for (const [key, value] of Object.entries(obj)) {  // destructuring we have to use like this to seprate the keys and values
    // Object.entries() method returns an array of a given object's own enumerable string-keyed property [key, value] pairs
    // Object.entries() is used to get an array of key-value pairs from an object.
    // This allows you to easily iterate over both keys and values using a for...of loop with destructuring.
    console.log(`Key: ${key}, Value: ${value}`);
}


// Now we will conver the objects into maps and use for in loop to iterate over the maps
const myobj = {
  js : "JavaScript",
  py : "Python",
  rb : "Ruby",
  java : "Java",
  cpp : "C++"
}

// Convert object to Map we can also do this using Object.entries() method
// This method is useful when you want to leverage the features of Maps, such as maintaining insertion order, using complex keys, or utilizing built-in Map methods.
// const myMap1 = new Map(Object.entries(myobj));
// console.log(myMap1);

// we can also do this using for in loop
// yes this is possible but not recommended as for in loop is not made for maps
// It is recommended to use for...in loops only with objects and not with arrays where the index order is important.
// If you need to iterate over the values of an array, use a for...of loop or a standard for loop instead.
const myMap1 = new Map();
for (const key in myobj) {
  myMap1.set(key, myobj[key]);
}
console.log(myMap1);

for (key in myMap1) {
    console.log(`Key: ${key}, Value: ${myMap1[key]}`);
}

// The above code will not work as myMap1 is not an object it is a map
// So we have to use for of loop to iterate over the maps as shown above
for (const [key, value] of myMap1) {  // destructuring we have to use like this to seprate the keys and values
    console.log(`Key: ${key}, Value: ${value}`);
}

// we will se Maps are not iterable using for in loop
// Maps are iterable using for of loop as shown above
// for in loop is used to iterate over the keys of an object
// for of loop is used to iterate over the values of an iterable object (array, string, map, set)

// So in conclusion we can say that for in loop is used to iterate over the keys of an object and for of loop is used to iterate over the values of an iterable object (array, string, map, set)
// So we can use for in loop to iterate over the keys of an object and for of loop to iterate over the values of an iterable object (array, string, map, set)
// We can also use for of loop to iterate over the keys of an object using Object.keys() method
// We can also use for of loop to iterate over the values of an object using Object.values() method
// We can also use for of loop to iterate over the key-value pairs of an object using Object.entries() method

// Now we will see what happens if we use for in loop to iterate over the maps
// It will not work as maps are not iterable using for in loop
// But it will not give any error it will just not iterate over the maps
// It will just give the keys of the map object
// As map is an object and for in loop iterates over the keys of an object
// So it will give the keys of the map object like size, set, get, has, delete, clear, entries, keys, values, forEach, etc.
// But it will not give the actual keys and values of the map
// So it is not recommended to use for in loop to iterate over the maps
// We should use for of loop to iterate over the maps as shown above
const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

for (const key in map) {
    console.log(key);
}

// map functions return the map object itself so we can chain the functions

const myNumbers = [1,2,3,4,5,6,7,8,9,10]
// const newnums = myNumbers.map((num)=> num+10)
const newnums = myNumbers.map((num)=> {return num+10})
console.log(newnums); // [ 11, 12, 13, 14, 15, 16, 17, 18, 19, 20 ]

// this is map chaining
const newNums = myNumbers.map((num)=> num+10).map((num)=> num+1)    // this second num now will starts from 11 to 20
                                        .filter((num)=> num>=40) 
console.log(newNums); // [ 12, 13, 14, 15, 16, 17, 18, 19, 20, 21 ]

// map function is used to create a new array from an existing array by applying a function to each element of the existing array
// map function does not change the original array
// map function returns a new array
// map function is chainable
// map function is used to iterate over the elements of an array and apply a function to each element of the array
// map function is used to transform the elements of an array and create a new array with the transformed elements
// map function is used to create a new array from an existing array by applying a function to each element of the existing array
// map function is used to iterate over the elements of an array and apply a function to each element of the array


