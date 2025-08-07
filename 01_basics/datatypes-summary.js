// Premitive datatypes (call by value)

// string,number,boolean,null,undefined,symbol,bigint

const id = Symbol('123');
const anotherid = Symbol('123');
console.log(id===anotherid);

// Non-Premitive dataypes (Refrence type) (call by refrence)

// arrays,objects,functions



const crushes = ["batool","manya","palak pawaar"]

let myobj = {
    name: "ojas",
    age: 18,
}

const myfunc = function(){
    console.log("hello world");
}


console.log(typeof anotherId); // do typeof of all the variables

// https://262.ecma-international.org/5.1/#sec-11.4.3


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

let myname = "ojas";
let mylastname = myname;
mylastname = " kotiyal";
console.log(mylastname);



let userOne = {
    email: "user@gmail.com",
    upi: "user@ybl"
}
let userTwo = userOne;
userTwo.email = "user2@gmail.com"
console.log(userOne.email);
console.log(userTwo.email);