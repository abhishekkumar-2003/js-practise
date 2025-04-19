/*
there are only two type of data type:-
primitive &
non-primitive
*/
/* Primitive -> call by value(change in copy)
->       7 type:-
->String; Number; Boolean; null;  Symbol; BigI nt
*/

const score = 101;
const scorePer = 75.9;

const isLogged = false;
const outSideTemp = null;

let userMail;

const id = Symbol('123');
const idPass = Symbol('123');
console.log(id===idPass);//false

const bigNumber = 23456789876543n;//BigInt

/* Non-Primitive -> Reference Type 
-> Arrays; object;  Functions;
*/
const heroes = ["saktiman", "nagagraj", "doga"];
let myObj = {
    name: "abhi",
    age : 18,
}
const myFun = function(){
    console.log("Hello java script");
    
}
/*
JavaScript is a dynamically typed language.

What does that mean?
In JavaScript:

You don’t need to declare the data type of a variable.

The type is determined at runtime, and a variable's type can change.

*/
