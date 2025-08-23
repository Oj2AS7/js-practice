// array

// const myArray = [1, 2, 3, 4, 5, true, "Ojas"]; //this is also an array
const myArray = [1, 2, 3, 4, 5]
// js arrays are resizable and also contains the mix of datatypes
console.log(myArray[3]); // to access values
/* 
js array_copy_peration creates shallow copies rather than deep copies
A shallow copy of an object or array copies only the top-level elements. If the array contains objects or other arrays, the references to those nested objects are copied, not the actual objects themselves. Changes to nested objects affect both copies. whose copy shares the same reference points
A deep copy copies all levels, including nested objects and arrays. The new copy is completely independent; changes to nested objects in one copy do not affect the other.
*/
const myheroes = ['shaktiman', 'naagraj', 'doga', 'batman'];
// new way to declare array
const myArr2 = new Array(1,2,3,4,5)

// array methods
console.log(myArr2)
myArray.push(6); // adds 6 to the end of the array
myArray.pop(); // removes the last element
myArray.unshift(0); // adds 0 not only 0 any number to the beginning of the array
myArray.shift(); // removes the first element
console.log(myArray);
console.log(myArr2.includes(9));
console.log(myArr2.indexOf(3)); // gives the index of the element if not found gives -1
const newArray = myArr2.join()
console.log(myArr2);
console.log(newArray); // the change is actually is in type gives string of array elements separated by commas
console.log(typeof newArray);  // it will be now string


// slice and splice method
console.log("A ",myArray);
const myArray1 = myArray.slice(1,3);
console.log("B ",myArray1);

//another example
const slicedArray = myArr2.slice(1, 4); // creates a new array from index 1 to 4 (not including 4)
console.log(slicedArray);
console.log(myArr2);



//another example
myArr2.splice(1, 2, 6, 7); // removes 2 elements from index 1 and adds 6 and 7
console.log(myArr2);  // last range is included in splice
// splice modifies the original array and it includes all elements in the bracket including the last one present in the bracket
console.log("C ",myArr2);