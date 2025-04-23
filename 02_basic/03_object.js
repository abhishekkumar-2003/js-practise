//singleton
//Object.create

//object literal
const mySym = Symbol("keys1");
const jsUser= {
    name : "Abhishek Kumar",
    Age:21,
    "Primary Objective": "Learn js",
    email : "abhishekkumar11mar203@gmail.com",
    [mySym]:"mykey"
};
// console.log(jsUser);
// console.log(jsUser.Age);
// console.log(jsUser["email"]);
// console.log(jsUser["Primary Objective"]);//console.log(jsUser.Primary Objeect)does not work here


// console.log(jsUser[mySym]);
// console.log(typeof jsUser[mySym]);
// jsUser.email="abhishekkumarloveindia@gmail.com";//overwrite to change the value of object
// Object.freeze(jsUser);//freeze to not chnage any value in future
// console.log(jsUser);

jsUser.greeting = function(){
    console.log("hello learner");
};
jsUser.greetingtwo = function () {
    console.log(`how are ${this.name}`);   
}
console.log(jsUser.greeting());
console.log(jsUser.greetingtwo());

