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

function one() {
    const usserNam = "Abhishek Kumar";
    function two() {
        const website = "Youtube";
        console.log(usserNam);
        
    }
    //console.log(website);//we can not acces the variable of nested fuction outside the function
    two();
}
one();

//----------------intresting--------------
console.log(addONE(5));//we can call the funtion before initialization if we make a function directly
function addONE(num) {
    return num+1;
}
//console.log(addTWO(8));//if we store funtion inside variable we can not call the funtion before initialization

const addTWO = function (num) {
    return num +2;
}