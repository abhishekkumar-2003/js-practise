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