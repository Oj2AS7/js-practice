// Certainly! In JavaScript, var does not follow block scope—it is only function-scoped or globally scoped. This can lead to unexpected behavior when using var inside blocks like if, for, or while.
// On the other hand, let and const are block-scoped, meaning they are only accessible within the block they are defined in.
// Example: var does NOT follow block scope
var x = 1000;
if (true) {
    var x = 10;
    let y = 20;
    const z = 30;
}
console.log(x); // Output: 10
//console.log(y); // Error: y is not defined
//console.log(z); // Error: z is not defined

// Even though x was declared inside the if block, it is accessible outside!

/*Explanation:

The variable x declared with var inside the if block is actually hoisted to the surrounding function or global scope.
This means x is accessible outside the block, which is different from let or const that are block-scoped.
Gotcha:
If you want variables to be limited to a block, use let or const instead of var.

// second problem is if variable x is reassigned it will still print the updated value outside the block */
var x = 100;
//console.log(x); // Output: 100 but if it is declared before if else condition it will give 10
// if (true) {
//     var x = 10;
//     let y = 20;
//     const z = 30;
// }
// console.log(x); // here it will give 10


// this will not happen in the case of let
let a = 300
if (true) {
    let a = 20;   // here this a is completely different from the outer a
    const b = 30;
    console.log("INNER : ",a); // here it will give 20
}
console.log("OUTER : ",a); // here it will give 300
// It gives output 300 because the let a = 20; inside the if (true) block is block-scoped.
// This means it only exists inside the { ... } of the if block and does not affect the outer let a = 300;.

// So, when you do console.log(a); outside the block, it refers to the outer a, which is still 300.
// The inner a (20) is not accessible outside the block, even though the if condition always runs.

function one(){
    const name = "Ojas"
    function two(){
        const website = "Youtube"
        console.log(name) // it can access the name variable of outer function
    }
    two()
    //console.log(website) // it cannot access the website variable of inner function it will throw an error
}
one()


if(true){
    const name = "Kotiyal"
    if(name==="Kotiyal"){
        const website = " Instagram"
        console.log(name + website) // it can access both name and website variables
    }
    //console.log(website) // it cannot access the website variable of inner function it will throw an error
}
//console.log(name) // it cannot access the name variable of inner if block it will throw an error

//++++++++++++++++++++++++++++++++++++INTRESTING+++++++++++++++++++++++++++++++++++++++++

console.log(addOne(5));  // it will execute and give output 6
function addOne(num){
    return num + 1;
}


//console.log(addTwo(5));  // it will throw an error because function expression is not hoisted
// this is all because the way we are declaring the function we will study more in hoisting
const addTwo = function(num){
    return num + 2;
}
console.log(addTwo(5));