const isUserLoggedIN = true
if(isUserLoggedIN){
    console.log("User is logged in")
}
// === we use this to check both value and datatype

const myAge = 18
if(myAge === 18){
    console.log("You are 18 years old")
}
else{
    console.log("You are not 18 years old")
}

const score = 200
if(score > 100){
    const power = "fly"
    console.log(`You have the power to ${power}`)
}
else{
    const power = "invisibility"
    console.log(`You have the power to ${power}`)
}
// if we use var instead of const then it will give the last value assigned to it but 
// it dont follow block scope

const balance = 1000
if (balance > 500) console.log("You are rich");
// for multiple conditions we use else if
const temp = 40
if(temp < 0){
    console.log("It's freezing outside")
}
else if(temp < 20){
    console.log("It's cold outside")
}
else {
    console.log("It's warm outside")
}

// const UserLoggedIN = true
// const isUserAdmin = false

// if(UserLoggedIN && isUserAdmin){
//     console.log("You are an admin")
// }
// else if(UserLoggedIN && !isUserAdmin){
//     console.log("You are a regular user")
// }
// else{
//     console.log("You are not logged in")
// }

const UserLoggedIN = true
const isUserAdmin = false

if(UserLoggedIN || isUserAdmin){   // it will check if any one condition is true
    console.log("You are an admin")
}
else if(UserLoggedIN && !isUserAdmin){
    console.log("You are a regular user")
}
else{
    console.log("You are not logged in")
}