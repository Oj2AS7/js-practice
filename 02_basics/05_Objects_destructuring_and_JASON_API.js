const course = {
    coursename : "JS",
    price: "999",
    courseinstructor: "John Doe",
    courseduration: "5 hours"
}
//course.courseinstructor
//course.price
// course.coursename
// to avoid repetition
const { courseinstructor, price, coursename } = course; // now we can access the values just by value name
// we can also give default value if the key is not present in the object
console.log(courseinstructor);
console.log(price);
console.log(coursename);
const { courseduration : duration } = course;
console.log(duration);

//JSON stands for JavaScript Object Notation. It is a lightweight data format used for storing and exchanging data. JSON is easy for humans to read and write, and easy for machines to parse and generate.
//JSON is often used in web applications to send data between a server and a client, or to store data in a file or database. It is a text-based format that is language-independent, making it a popular choice for data exchange between different programming languages and platforms.
//JSON is commonly used in APIs to send and receive data between servers and web applications.

// {
//     "name" : "Ojas",             // these are not object it would be treated as JSON
//     "studying" : "JavaScript",
//     "price" : "free"             these are just the brief info of JSON we would conver this in object and fetch the data through api
// }

