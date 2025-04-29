const userEmail = "abhi"; // non-empty string
if (userEmail) {
    console.log("got user mail");
} else {
    console.log("user mail not found");
}

const userEmail1 = ""; // empty string
if (userEmail1) {
    console.log("got user mail");
} else {
    console.log("user mail not found");
}

const userEmail2 = []; // empty array
if (userEmail2) {
    console.log("got user mail");
} else {
    console.log("user mail not found");
}
if(userEmail2.length === 0){
    console.log("Array is empty")
}
/*
false value:-
false, 0, -0, BigInt 0n, null, undefine, Nan.
Empty String — no matter "" or '' or `` (backticks), it is falsy.
*/
/*
truthy value 
"0", "false", " "

Arrays [] and objects {} — even if empty — are truthy!

Functions — even if empty — are also truthy.


=>Infinity	      Number	  Not zero
=>-Infinity	      Number	  Not zero
=>42	          Number	  Non-zero number
=>true	          Boolean	  true

*/

const emptyObj = {};
if(Object.keys(emptyObj).length === 0){
    console.log("Empty object ");
    //console.log(Object.keys(emptyObj));
     
}

//Nullish Coalescing Operator (??)
/*
Purpose:
It provides a default value when the original value is null or undefined.

Syntax:

javascript
Copy
Edit
let result = value ?? defaultValue;
It checks:

If value is NOT null AND NOT undefined → returns value.

Otherwise → returns defaultValue.
*/
console.log(null ?? "Hello");     // "Hello"
console.log(undefined ?? "World"); // "World"
console.log(false ?? "Hi");        // false (NOT "Hi")
console.log(0 ?? 100);             // 0 (NOT 100)
console.log('' ?? "Empty");        // '' (empty string)


//terniary operator
/*
condition ? expressionIfTrue : expressionIfFalse;
condition: An expression that evaluates to true or false.

expressionIfTrue: Executed if the condition is true.

expressionIfFalse: Executed if the condition is false.
 */
// const age = 20;
// const status = (age >= 18) ? "Adult" : "Minor";
// console.log(status); // Output: "Adult"

if(true) console.log('one line if loop');
