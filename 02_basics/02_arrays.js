const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]
// marvel_heros.push(dc_heros)
// console.log(marvel_heros) // it will take arrays as a data single element
//// marvel_heros is now ["thor", "Ironman", "spiderman", ["superman", "flash", "batman"]]
//console.log(marvel_heros[3][1]);

const combined = marvel_heros.concat(dc_heros)
console.log(combined) // it will not change the original array
// combined is ["thor", "Ironman", "spiderman", ["superman", "flash", "batman"], "superman", "flash", "batman"]
// marvel_heros is unchanged by concat
/*
push adds an element (or array) to the end of the original array and modifies it. If you push an array, it becomes a nested array (as in your code).
concat combines arrays and returns a new array without modifying the original. It merges elements, not nesting*/

const all_new_heroes = [...marvel_heros, ...dc_heros] // here we can add new arrays which is not possible in concat
console.log(all_new_heroes);  // now it is not an array every element is separate (individual)

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array = another_array.flat(1) // it will flat the array upto 2 level this 2 is actually depth in an array
console.log(real_another_array);
// we can also use infinity
const real_another_array_infinity = another_array.flat(Infinity)
console.log(real_another_array_infinity);


console.log(Array.isArray("Ojas"))
console.log(Array.from("Ojas")) // to convert it in array
console.log(Array.from({name :"Ojas"})) // this will give an empty array because it will not be able to indentify the length 

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3)) // it will convert it into an array or Returns a new array from a set of elements.