// Immediately Invoked Function Expression (IIFE)

(function chai(){ // here is actually no need to name the function like here "chai" this is actually called named iife
    console.log("This function runs immediately upon definition!");
})(); // actually we have to put ; because iife dont know where to stop context to to avoid this we use iife

//()() first () if for defination of the function and second is for execution
// to write from arrow function we can write like this -->
(() => {
    console.log('This function runs immediately upon definition!');
})();

((name) => {
    console.log(`my name is ${name}`);
})('Ojas')