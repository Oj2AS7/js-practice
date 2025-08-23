// This is Object Singleton

//const tinderUser = new Object() 
//another way to declare Objects
const tinderUser = {};
tinderUser.id = "123abc"
tinderUser.name = "Ojas"
tinderUser.isloggedin = false
console.log(tinderUser); // empty Objects

const regularUser = {
    email: "some@example.com",
    fullname:{
        usersfullname: {
            firstname: "Ojas",
            lastname: "Kotiyal"
        }
    }
};
console.log(regularUser);
console.log(regularUser.fullname);
console.log(regularUser.fullname.usersfullname.firstname);
// to acces from [] this method--
console.log(tinderUser["name"]); // Accesses the 'name' property
console.log(regularUser["fullname"]["usersfullname"]["firstname"]); // Accesses nested properties

const obj1 = {1:"a", 2:"b", 3:"c"}
const obj2 = {4:"d", 5:"e", 6:"f"}
const obj3 = {obj1, obj2}
console.log(obj3);  // we will get object inside object like in arrays case

// const obj4 = Object.assign({}, obj1, obj2) // it will merge the objects
// {} is not neccessary but it is a good practice as it is a gaurentee that it will be merge as {} will act as a target and all objects as sources if we will not give give this every value will be in Object1
// another method
const obj5 = {...obj1, ...obj2}
console.log(obj5); // it will give single object with all the key value pairs

// if multiple objects store in array to acces it --
const users = [
    {id: "123abc", name: "Ojas", isloggedin: false},
    {id: "456def", name: "John", isloggedin: true},
    {id: "789ghi", name: "Jane", isloggedin: false}
];
console.log(users[1]);
console.log(users[1].name);

console.log(tinderUser)
console.log(Object.keys(tinderUser)); // it will give all the keys in array form
console.log(Object.values(tinderUser)); // it will give all the values in array form
console.log(Object.entries(tinderUser)); // it will give all the key-value pairs in array form

// to check if the value is present or not in the object
console.log(tinderUser.hasOwnProperty("name")); // it will give true if present otherwise false
console.log(tinderUser.hasOwnProperty("name1")); // it will give true if present otherwise false