function sayMyName(){
    console.log("Ojas");
}

sayMyName // if we just write this is the refrence to execute it we have to write sayMyName();
sayMyName(); // this will execute the function

// function addTwoNumbers(num1, num2){ // num1 and num2 are parameters
//     console.log(num1 + num2);
// }

// addTwoNumbers(54,67)
// addTwoNumbers(5,"7") 
// addTwoNumbers(2,"a")
// addTwoNumbers(5,null)


// // Now!!! here is the catch 
// const result = addTwoNumbers(5, 10);
// console.log(result); // this is undefined because console is not returning anything its just an operation which it performs it is not returing any value
// // so to avoid this we use return

function addTwoNumbers(num1, num2){ // num1 and num2 are parameters
    return (num1 + num2);
}

// remember after return nothing will be printed or executed we have to write what ever we want before return

// function addTwoNumbers(num1, num2){ // num1 and num2 are parameters
//     return (num1 + num2);
//     console.log("ojas")         this will not print to print it we have to write before return
// }

const result = addTwoNumbers(5, 10);
console.log(result); 

// function loginUserMessage(username){
//     return `${username} just logged in`
// }
// console.log(loginUserMessage("Ojas"));
// console.log(loginUserMessage()); // it will show undefined just logged in
// // to avoid this we use default parameters and if else condition


function loginUserMessage(username = "Ojas"){
    if(!username){        // we can also use the condition if(username === undefined){}
        // this condition is even used even if we dont give a default value
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage())
console.log(loginUserMessage("")); // it will show Please enter a username

// ... this is rest operator and spread operator both it use depends on its usecase

// function calculatecartprice(...items){  // we use this rest operator if we are unaware about the parameter
//     return items            // so it will return all the items in an array
// }
// console.log(calculatecartprice(200,300,400,500)); // it will give all the values in array form

// but if it is return like this
function calculatecartprice(item1,item2,...items){  // this will give the item1 and item2 will be in value1 and value 2 rest would be in array
    return items           
}
console.log(calculatecartprice(200,300,400,500,600,700));  

const user = {
    name: "Ojas",
    age: 25,
    location: "India"
}
function handleobject(anyobject){
    console.log(`Username is ${anyobject.name} and age is ${anyobject.age}`)
}
handleobject(user);
// but we can also do this using destructuring
handleobject({
    name: "Tejas",
    age: 69
})

// function with arrays
const sample_array = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(sample_array))

console.log(returnSecondValue([9696, 6969, 1000, 2007]));