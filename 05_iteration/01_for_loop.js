//for

// for (let i = 0; i < 10; i++) {
//     const element = i;
//     console.log(element);   
// }

// for (let i = 1; i <= 20; i++) {//table from 1 to 20
//     console.log(`table of ${i}`);
//     for (let j = 1; j <=10; j++) {
//         console.log(`${i} * ${j} = ${i*j}`);      
//     }
// }

// let myArray = ["mango", "apple", "banana", "papaya", "orange"];
// console.log(myArray.length);
// for (let i = 0; i < myArray.length; i++) {
//     const element = myArray[i];
//     console.log(element);
//}

for (let i = 0; i < 10; i++) {
    const element = i;
    if(i==7){
        console.log("7 is detected");
        
    }
    console.log(element);
}
console.log("use case of break");

for (let i = 0; i < 10; i++) {
    const element = i;
    if(i==7){
        console.log("7 is detected");
        break;
    }
    console.log(element);
}
console.log("use case of continue");

for (let i = 0; i < 10; i++) {
    const element = i;
    if(i==7){
        console.log("7 is detected");
        continue;
    }
    console.log(element);
}