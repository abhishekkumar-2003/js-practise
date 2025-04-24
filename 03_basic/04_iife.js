//Immediately Invoked Function Expression

(function chai() {//named iife
    console.log("db connected");
    
})();

( (name) => {
    console.log(`db connected two by ${name}`);
})("abhishek");