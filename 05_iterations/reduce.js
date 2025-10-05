// reduce function which take 2 value and return single value
// The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
// The reducer function takes four arguments:
// Accumulator (acc) - It accumulates the callback's return values; it is the accumulated value previously returned in the last invocation of the callback, or initialValue, if supplied.
// Current Value (cur) - The current element being processed in the array.
// Current Index (idx) - The index of the current element being processed in the array. Starts from index 0 if an initialValue is provided, otherwise starts from index 1.
// Source Array (src) - The array reduce() was called upon.
// Syntax: arr.reduce(callback(accumulator, currentValue, index, array), initialValue)
// initialValue is optional

const mynums = [1,2,3,4,5,6,7,8,9,10];
const mytotal = mynums.reduce(function (acc, curr){
    console.log(`Acc: ${acc}, Curr: ${curr}`);
    return acc + curr;
}, 0) // 0 is initial value of acc
console.log(mytotal); // 55


const mytotal1 = mynums.reduce((acc, curr) => acc + curr, 0);
console.log(mytotal1); // 55

// if we do not provide initial value then acc will be first value of array and curr will be second value of array
const mytotal2 = mynums.reduce((acc, curr) => acc + curr);
console.log(mytotal2); // 55

// so it is always better to provide initial value to avoid any confusion

const shoppingCart = [
    {
        product: "Laptop",
        price: 30000,
        quantity: 1
    },
    {
        product: "Mobile",
        price: 20000,
        quantity: 2
    },
    {
        product: "Tablet",
        price: 15000,
        quantity: 3
    },
    {
        product: "Headphones",
        price: 5000,
        quantity: 4
    },
    {
        product: "Charger",
        price: 2000,
        quantity: 5
    }
]

const pricetopay = shoppingCart.reduce((acc, item) => {
    return acc + item.price * item.quantity;
}, 0)
console.log(pricetopay); // 125000

// so in conclusion we can say that reduce function is used to reduce the array to a single value by applying a function to each element of the array
// reduce function takes 2 arguments the first argument is a callback function which takes 2 arguments the first argument is the accumulator and the second argument is the current value
// The second argument is optional it is the initial value of the accumulator if not provided then the first value of the array will be taken as the initial value of the accumulator
// reduce function does not change the original array
// reduce function can be used to sum all the values of an array