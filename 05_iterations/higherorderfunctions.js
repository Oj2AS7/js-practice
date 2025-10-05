const coding = ["js", "ruby", "java", "python", "cpp"]
//for each loop
// The forEach() method executes a provided function once for each array element.
// It is not executed for empty elements.
// It is not chainable like map, filter, reduce etc as it returns undefined
// It does not change the original array
// It does not support break and continue statements
// It is not recommended to use forEach() if you need to break out of the loop or return a value from the loop
// In that case, use a standard for loop or a for...of loop instead.
coding.forEach( function (val){
    console.log(val);
} )

coding.forEach( (item)=>{
    console.log(item);
})

function printme(item){
    console.log(item);
}
coding.forEach(printme) // we have to give refrence of the function not the function call like printme()

coding.forEach( (item, index, array) => {
    console.log(`Item: ${item}, Index: ${index}, Array: ${array}`);
} )
//The forEach method’s callback function can take three parameters:
// item (current element)
// index (current element’s index)
// array (the array being iterated)


const myCoding = [
    {
        name: "JavaScript",
        type: "frontend"
    },
    {
        name: "Python",
        type: "backend"
    },
    {
        name: "Ruby",
        type: "backend"
    }
]
myCoding.forEach( (item) => {
    console.log(`Name: ${item.name}, Type: ${item.type}`);  
})


// now remenber forEach does not return anything
const newCoding = coding.forEach( (item) => {
    //console.log(item);
    return item;
})
console.log(newCoding); // undefined

const mynums = [1,2,3,4,5,6,7,8,9,10]
const newnums = mynums.filter((num)=> num > 5)   // filter actually returns the value
console.log(newnums); // [ 6, 7, 8, 9, 10 ]

// in array arrow function when we give scope brackets {} we have to use return keyword to return the value
// but if we dont give scope brackets {} then it will return the value without return keyword
const newnums2 = mynums.filter( (num) => { return num > 5 } ) 
console.log(newnums2); // [ 6, 7, 8, 9, 10 ]

const newnums3 = []
mynums.forEach( (num) => {
    if(num > 4){
        newnums3.push(num)
    }
})
console.log(newnums3); // [ 5, 6, 7, 8, 9, 10 ]

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

let userBooks = books.filter( (bk) => bk.genre === 'History')

  userBooks = books.filter( (bk) => { 
    return bk.publish >= 1995 && bk.genre === "History"
})
  console.log(userBooks);