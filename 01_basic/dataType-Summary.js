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
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/*
memmory => Stack; heap;
Stack => Primitive => used copy for changes memory(When asing to another variable)
heap=> Non-Primitive => used refrence for changes in memory ->
(When asing to another variable)
*/
let myName = "Abhishek";
let myNickName = myName;
myNickName="abhi";

console.log(myName);//Abhishek
console.log(myNickName);//abhi
//by assining variable to another veriable we make copy of another variale 
// then assign then such that making change in new variable does not affect old variable 
// in Primitive 
let userOne = {
    user : "Abhishek",
    email : "abhishek@google.com"

}
let userTwo = userOne;
userTwo.email="abhi@google.com";
console.log(userOne);
console.log(userTwo);

// here in in non-promotove in when one variable assigned to another in does not copy 
//it make a refrence to same data so, by changing in new variable will affect the 
//old variable also
