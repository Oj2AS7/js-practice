const mySym =  Symbol("key1")
//Symbol is not a constructor, so you should not use new with it.
const Jsusers = {
    name: "Ojas",
    "full name": "Kotiyal",
    mySym : "mykey1",
    [mySym]: "mykey1",
    age:  18,
    location: "India",
    email: "ojas@example.com",
    isloggedin: false,
    last_loggedin: ["Monday","Saturday"]
}

console.log(Jsusers.name);
console.log(Jsusers['name']);  // behind the scenes this key are taken as string so here i have to pass the keys as string
// actually we use second case because there is no way we can access the "full name" key using dot notation
console.log(Jsusers['full name']);

// if u have to use symbol as a key we cant use it directly although it will give the result but its datatype would be not symbol
console.log(Jsusers.mySym);  // it will give the value of mySym key but its datatype would be string
console.log(typeof Jsusers.mySym); // it will give string
// to use it as a symbol we should use [mySym] like this --
console.log(Jsusers[mySym]);
// to change the value 
Jsusers.email = "ojaskotiyal@chatgpt.com"
console.log(Jsusers);

// we can use use function as variable like this--
Jsusers.greetings = function(){
    console.log("Hello Jsusers");
}

Jsusers.greetingsTwo = function(){
    console.log(`Hello Js User ${this.name}`); // to access the name property
}

console.log(Jsusers.greetings);
console.log(Jsusers.greetings());
console.log(Jsusers.greetingsTwo());

// if we to lock the value or it should remain unchanged then we can use Object.freeze()
Object.freeze(Jsusers);
Jsusers.email = "ojaskotiyal@gmail.com" //not throw an error but it will not change
console.log(Jsusers);
// but we can't use this greetings function after freezing the object
