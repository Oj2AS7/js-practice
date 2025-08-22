let mydate = new Date()
console.log(mydate.toDateString());
console.log(mydate.toLocaleString());
console.log(mydate.toString())

//let myCreatedDate = new Date(2023,0,23) //// here 0 is month (months starts from 0 in js)
let myCreatedDate = new Date(2023,0,23 , 5,3)
// here 5 and 3 are time which gives the output 5:03:00 AM but if we want it in pm
// the i should know that it follows 24 hours time
console.log(myCreatedDate.toLocaleString());
let myNewCreatedDate = new Date("2023-01-14");
// when we go for yy-mm-dd format then month starts from 01
// but in india we follow mm-dd-yy format
console.log(myNewCreatedDate.toLocaleString())
console.log(myNewCreatedDate.toDateString())

let myTimeStamp = Date.now()
console.log(myTimeStamp) // we will get the value in mili sec
console.log(myNewCreatedDate.getTime()); // we will get the time of that in mili sec till the date we have declared
// we can also convert this in sec
console.log(Math.floor(Date.now()/1000)); // this floor we are doing to avoid decimal

let newDate = new Date()
console.log(newDate.getDate());
console.log(newDate.getDay());
console.log(newDate.getFullYear());
console.log(newDate.getHours());
console.log(newDate.getMilliseconds());
console.log(newDate.getMinutes());
console.log(newDate.getMonth()+1); // here we use +1 to make it 1-12 as in js month starts from 0
console.log(newDate.getSeconds());
console.log(newDate.getTime());

// toLocaleString
console.log(newDate.toLocaleString('default',{
        weekday: "long", // here we can define the format of the date
        
 // here we defines the object in the string in the brackets
}))
