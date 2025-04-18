let score = 33;
console.log(typeof score);
console.log(score);

console.log("--------------------");

let score1= "33";
console.log(typeof (score1));
console.log(typeof(Number(score1)));
console.log(score1);
console.log(Number(score1));

console.log("--------------------");


let score2= "33abc";
console.log(typeof score2);
console.log(typeof (Number(score2)));
console.log(score2);
console.log(Number(score2));

console.log("--------------------");

let score3= null;
console.log(typeof score3);
console.log(typeof (Number(score3)));
console.log(score3);
console.log(Number(score3));

console.log("--------------------");

let score4= undefined;
console.log(typeof score4);
console.log(typeof (Number(score4)));
console.log(score4);
console.log(Number(score4));

console.log("--------------------");

let score5= true;
console.log(typeof score5);
console.log(typeof (Number(score5)));
console.log(score5);
console.log(Number(score5));

console.log("--------------------");

//"33" => 33
//"33add" => NaN
//"abhi" => NaN
// true => 1; false => 0

console.log("--------------------");

let isLoogedIn= 1;
console.log(isLoogedIn);
console.log(typeof isLoogedIn);
let BooleanisLoogedIn = Boolean(isLoogedIn);
console.log(typeof BooleanisLoogedIn);
console.log(BooleanisLoogedIn);

console.log("--------------------");

let isLoogedIn0= 0;
console.log(isLoogedIn0);
console.log(typeof isLoogedIn0);
let BooleanisLoogedIn0 = Boolean(isLoogedIn0);
console.log(typeof BooleanisLoogedIn0);
console.log(BooleanisLoogedIn0);

console.log("--------------------");

let isLoogedIn2= 2;
console.log(isLoogedIn2);
console.log(typeof isLoogedIn2);
let BooleanisLoogedIn2 = Boolean(isLoogedIn2);
console.log(typeof BooleanisLoogedIn2);
console.log(BooleanisLoogedIn2);

console.log("--------------------");

let isLoogedIn5= undefined;
console.log(isLoogedIn5);
console.log(typeof isLoogedIn5);
let BooleanisLoogedIn5 = Boolean(isLoogedIn5);
console.log(typeof BooleanisLoogedIn5);
console.log(BooleanisLoogedIn5);

// -1 => true
//""=> false
//"Abhi" => true
//1=> true
//0=>false
//null => false
//undefine=> false
console.log("--------------------");

let someNum= 76;
console.log(someNum);
console.log(typeof someNum);
let StringOfNum = String(someNum);
console.log(typeof StringOfNum);
console.log(StringOfNum);


console.log("--------------------");

let someNum2= null;
console.log(someNum2);
console.log(typeof someNum2);
let StringOfNum2 = String(someNum2);
console.log(typeof StringOfNum2);
console.log(StringOfNum2);

console.log("--------------------");

let someNum3= true;
console.log(someNum3);
console.log(typeof someNum3);
let StringOfNum3 = String(someNum3);
console.log(typeof StringOfNum3);
console.log(StringOfNum3);