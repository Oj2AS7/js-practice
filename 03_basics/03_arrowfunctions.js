const users = {
    username : "Ojas",
    price : 69,
    username : "Ojas",
    welcomemessage : function(){
        console.log(`Welcome ${this.username}, your balance is ${this.price}`);
        console.log(this); // { username: 'Ojas', price: 69, welcomemessage: [Function: welcomemessage] } // it actually talks about current context
        // if we use arrow function here it will give undefined because arrow function does not have its own this it takes from its parent
        //console.log(this) inside the welcomemessage method logs the current object context—in this case, the users object itself.
        /*It gives you both outputs because you call users.welcomemessage() twice—once when username is "Ojas" and again after you change username to "Tejas". Each time, this refers to the current context, meaning the current state of the users object at the moment the method is called.

Current context means:

Inside a regular function (not arrow), this refers to the object the method is called on.
So, this.username and this.price reflect the latest values in the users object.*/
    }
}
users.welcomemessage()
users.username = "Tejas"
users.welcomemessage()

console.log(this) // {} in nodejs it will be empty object but in browser it will be window object

/* The global object is the top-level object in a JavaScript environment that provides global variables and functions.

In Node.js, the global object is called global.
In browsers, the global object is called window.
Global objects hold built-in functions (like setTimeout, console, etc.) and any variables declared outside functions (with var in browsers). */

/*When you use console.log(this) outside any function or object (like at the bottom of your file), in Node.js, this refers to the global context, which is an empty object ({}) in modules. as we are in node environment

Summary:

Inside an object method, this refers to the object (current context).
At the top level in a Node.js module, this is {} (not the global object).
That’s why console.log(this) at the end prints {}—the current context is the module itself, which is empty.*/ 

function logThis() {
    let username = "Ojas";
    console.log(this); // this here refers to global object
    //console.log(this.username); // undefined because this here refers to global object and there is no username property on global object
    // "this" will refer to the global object in this context 
    // it will work only on object not on function
}
logThis();

const log_This = function(){
    let username = "Ojas";
    console.log(this.username); // this will give undefined
}
log_This();

/* this is accesable as we want in local object only not in function it refers to the global object
this.username gives undefined in your example because when you call log_This() as a regular function (not as an object method), this refers to the global object (or is undefined in strict mode). There is no username property on the global object, so this.username is undefined.

Summary:

In a regular function call, this is not bound to your local variable or function scope.
Only object methods (like users.welcomemessage) have this referring to the object.
Local variables like let username = "Ojas"; are not attached to this.
 */

const log_This_Arrow = () => {
    let username = "Ojas";
    //console.log(this.username); // this will give undefined
    console.log(this)
}

const add_Two  = (a, b) => {
    //console.log(this); // this will give undefined
    return a + b;
}

// we can also write this in implicit way
// const add_Two  = (a, b) => (a + b);

console.log(add_Two(2, 3)); // 5


const return_object = () => ({ username: "Ojas" });  // if we dont write object {} in () it will give undefined
console.log(return_object()); // { username: 'Ojas' }


