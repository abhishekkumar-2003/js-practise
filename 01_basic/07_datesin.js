let myDate = new Date();
console.log(typeof myDate);//object
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleTimeString());
console.log(myDate.toLocaleDateString());

let myCreateDate = new Date(2023, 0, 19);
console.log(myCreateDate.toString());
let myTimeStamp = Date.now();
console.log(myTimeStamp);
