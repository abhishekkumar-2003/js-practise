// for of

// const arr = [1,2,3,4,5];
// for (const element of arr) {
//     console.log(element);
    
// }

// const greeting = "Hello Abhishek!";
// for (const greet of greeting) {
//     console.log(`the each word of greeting is ${greet}`);
    
// }


//map

const map1 = new Map();
map1.set("IN", "India");
map1.set("Fr", "france");
map1.set("Is", "isral");
map1.set("IN", ["India", "Bharat"]);

console.log(map1);


//neither the Map nor the Object contains duplicate values.
//object side by side comparision
// const Userjs = new Object();//singleton object

// Userjs.id = "21scse1011029";
// Userjs.name="Abhishek";
// Userjs.Age=22;
// Userjs.batch="2021-2025";
// Userjs.id= "21scse1011029";
// console.log(Userjs);
/*
| Feature                       | `Map`                       | `Object`                        |
|-------------------------- |--------------------------------|---------------------------------|
| Key types                 | Any type                       | Only strings or symbols        |
| Key order                 | Maintains insertion order      | No guaranteed order            |
| Iteration                 | Easier with `map.forEach()`    | Requires `for...in` or `Object.entries()` |
| Performance (frequent add/remove) | Better suited          | Slightly slower                |
| Use case                  | Dynamic key-value storage      | Structured data (like JSON)    |
*/