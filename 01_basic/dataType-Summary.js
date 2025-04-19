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
console.log(typeof score);//Number
console.log(typeof scorePer);//Number

const isLogged = false;
console.log(typeof isLogged);//boolean

const outSideTemp = null;
console.log(typeof outSideTemp);//object

let userMail;

const id = Symbol('123');
const idPass = Symbol('123');
console.log(typeof id);//symbol
console.log(id===idPass);//false

const bigNumber = 23456789876543n;//BigInt
console.log(typeof bigNumber);//bigint

/* Non-Primitive -> Reference Type 
-> Arrays; object;  Functions;
*/
const heroes = ["saktiman", "nagagraj", "doga"];
console.log(typeof heroes);//object

let myObj = {
    name: "abhi",
    age : 18,
}
console.log(typeof myObj);//object
const myFun = function(){
    console.log("Hello java script");
    
}
console.log(typeof myFun);//function

/*
JavaScript is a dynamically typed language.

What does that mean?
In JavaScript:

You don’t need to declare the data type of a variable.

The type is determined at runtime, and a variable's type can change.

*/
