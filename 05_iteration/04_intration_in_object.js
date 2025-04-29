//object
const myObj = {
    js:"javaScript",
    rb: "Ruby",
    cpp :"C++",
    swift: "SWIFT by apple",
    java: " JAVA by oracle"  
}
// for (const element of object) {
    
// }
for (const key in myObj) {
   //console.log(key);
   //console.log(`${key} :- ${myObj[key]}`);
}

// const map1 = new Map();
// map1.set("IN", "India");
// map1.set("Fr", "france");
// map1.set("Is", "isral");
// for (const key in Map) {
//     console.log(Map[key]);
    
// }// for in loop does not work in map


const arr = ["apple", "orange", "banana", "papaya"];
for (const key in arr) {
    console.log(   `${key} ;- ${arr[key]}`);
    
    
}

for (const element of arr) {
    console.log(element);
}




/*
| Loop Type     | Works on Objects | Works on Map | Comment                            |
|---------------|------------------|--------------|------------------------------------|
| `for...in`    | ✅ Yes            | ❌ No         | Use with plain JS objects only     |
| `for...of`    | ❌ (with objects) | ✅ Yes        | Best for `Map`, `Set`, Arrays      |
| `.forEach()`  | ✅ (Arrays/Maps)  | ✅ Yes        | Clean syntax for looping           |

*/