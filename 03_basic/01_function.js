// function sayMyName() {//here funtion is a keyword & sayMyName is a function name
//     console.log("A");
//     console.log("B");
//     console.log("H");
//     console.log("I");
// }
//sayMyName()


// function addTwoNumber(num1, num2){//here num1 and num2 is parameter
//     console.log(num1+num2);
// }
// addTwoNumber(1,5);//here we are calling function and here 1 and 5 is argument
// const res = addTwoNumber(1,2);
// console.log("res: "+res);//we do not return any things thats why it return undefine
// function multiplyTwoNum(num3, num4) {
//     const resMul = num3*num4;
//     return resMul;
// }
// console.log(multiplyTwoNum(6,9));//now this will return value



function logInUser(username){
    if(username===undefined){
        //console.log("Please enter the user name");
        return `please enter the user name`;
    }
    return`${username} just loged in`;
}
//console.log(logInUser());
//console.log(logInUser("abhi"));


//+++++++++Rest Operator+++++++++++
function calculatePrice(...value1) {//...value1 here ... work as a rest operater which can take multiple parameter without initial difination
    return value1;
}
//console.log(calculatePrice(122, 334, 45,"abhi", 678, 9));

const visitor = {
    userName_vi : "Surbhi",
    profession : "Developer"
};
function handleObject(anyObject) {
    console.log(`${anyObject.userName_vi} is a ${anyObject.profession}`);
};
handleObject(visitor);
handleObject({
    userName_vi:"Abhishek",
    profession: "Coder"
});

const myArray = [100, 200, 300, 400, 500];
function returnSecondValue(any_Array) {
    return any_Array[1];
}
console.log(returnSecondValue(myArray));