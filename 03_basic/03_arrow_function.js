const user={
    userName : "Abhishek",
    priceOfProduct : 999,
    welcomeMessage : function () {
        console.log(`${this.userName}, welcome to the website.`);
       // console.log(this);
        
    }
}

// user.welcomeMessage();
// user.userName = "Surbhi";
// user.welcomeMessage();
//console.log(this);

// function chai(){
//     const userN = "abhishek";
//     console.log(this.userName);//"this inside a regular function 
//                                // refers to the global object (in non-strict mode) 
//                                //or undefined (in strict mode), unless the function
//                                // is called as a method of an object."
// }
//chai();


/*
=>  'this' does not refer to variables declared with let, const, or var inside a function.
=>'this' refers to the context in which the function was called — for
 regular functions, that's usually the global object
  (unless it’s used inside an object or class).
*/


// const addTwo = (num1, num2) => {
//     return num1 + num2;
// };//Explicit return → use when logic is more complex (multiple lines or if-else conditions).


//const addTwo = (num1, num2) =>  num1 + num2;
const addTwo = (num1, num2) =>  (num1 + num2);//Implicit return → use for short, clean, one-liner functions.

//console.log(addTwo(5,7));

const naam = () =>({userid : 123});
console.log(naam());
