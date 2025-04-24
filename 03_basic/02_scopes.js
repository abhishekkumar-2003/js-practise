let a = 987;
const b = 5498;
var c= 12345;
if(true){

    let a = 1000;
    const b = 123;
    var c = 456;
    console.log("(block scope)a: "+a);
    console.log("(block scope)b: "+b);
    console.log("(block scope)c: "+c);

}
console.log("(globle scope)a: "+a);
console.log("(globle scope)b: "+b);
console.log("(globle scope)c: "+c);
//value of globle scope var c change due to block scope which can lead to error


