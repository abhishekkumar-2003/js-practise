/*
| Method        | Returns New Array? | Use Case                              |
|---------------|--------------------|---------------------------------------|
| `forEach()`   | ❌ No              | Just perform action on each item       |
| `map()`       | ✅ Yes             | Transform each item                    |
| `filter()`    | ✅ Yes             | Keep only items that match condition   |
*/

const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNum = myNum.map((n)=> {
//     return n+10;
// })
// console.log(newNum);

// myNum.forEach(element => {
//     console.log(element+10);
// });

//  channing
// const newNum2 = myNum.map((num)=> num*10)
//                       .map((num)=> num+100)
//                       .filter((num)=> num>=151);
// console.log(newNum2);


//REDUCED
const array1= [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const newTotal = array1.reduce(function (acc, curr) {
//     console.log(`acc: ${acc} and curr:${curr}` );
//     return acc+curr;
// }, 0);
const newTotal = array1.reduce( (acc, curr) =>{
    console.log(`acc: ${acc} and curr:${curr}` );
    return acc+curr;
}, 0);

console.log(newTotal);

const shopingCart=[
    {
        course:"js",
        price:2999
    },
    {
        course:"java",
        price:999
    },
    {
        course:"mobile development",
        price:5999
    },
    {
        course:"data science",
        price:11999
    }
];
 const priceToPay=shopingCart.reduce((acc, item)=>acc+item.price, 0);
 console.log(priceToPay);
 