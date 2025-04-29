//for each 
const arr = ["apple", "orange", "banana", "papaya"];

// arr.forEach(function (item) {
//     console.log(item);
// })
// arr.forEach((value)=>{
//     console.log(value);
// })
function printMe(item) {
    //console.log(item);
}
arr.forEach(printMe);
arr.forEach((value, index, arr)=>{
   // console.log(value, index, arr);
})

const myCodding =[
    {
        languase: "javaSCript",
        fileExt : "js"
    },
    {
        languase: "java",
        fileExt : "java"
    },
    {
        languase: "CPP",
        fileExt : "c++"
    },
    {
        languase: "Python",
        fileExt : "py"
    }
]
console.log(myCodding);
myCodding.forEach((item)=>{
    console.log(item.fileExt);
    
})
