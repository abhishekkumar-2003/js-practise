// const coding = ["java", "C++", "java script", "Phython"];


// const values = coding.forEach((item)=>{//forEach does not return any things
//     console.log(item);
//     return item;  
// })
// console.log(values);


// const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(myNum.filter((num)=> num>4));//num.filter() return array
// console.log(myNum.filter((num)=> {num>4}));//num.filter() return array 
// // when brashes used, the return key word is must
// console.log(myNum.filter((num)=> {return num>4}));


/* 
filter() is an array method that:

->loops through each element,

->applies the condition inside the callback,

->returns a new array containing only elements where the condition is true.

*/

// const myNum1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const newNum = [];
// myNum1.forEach((num)=>{
//     if(num>4){
//         newNum.push(num);
//     }
// })
// console.log(newNum);


const book =[
    {
        title : 'book one',
        gener : 'fiction',
        publish : 1981,
        edition : 2004
    },
    {
        title : 'book two',
        gener : 'non-fiction',
        publish : 1992,
        edition : 2008
    },
    {
        title : 'book three',
        gener : 'history',
        publish : 1999,
        edition : 2007
    },
    {
        title : 'book four',
        gener : 'non-fiction',
        publish : 1989,
        edition : 2010
    }, 
    {
        title : 'book five',
        gener : 'science',
        publish : 2009,
        edition : 2014
    }, 
    {
        title : 'book six',
        gener : 'fiction',
        publish : 1987,
        edition : 2010
    }, 
    {
        title : 'book seven',
        gener : 'history',
        publish : 1986,
        edition : 1996
    },
    {
        title : 'book eight',
        gener : 'science',
        publish : 2011,
        edition : 2006
    },
    {
        title : 'book nine',
        gener : 'non-fiction',
        publish : 1981,
        edition : 1989
    }
]

//const userBook = book.filter((bk)=>bk.gener==='history');
//console.log(userBook);

const userBook1 = book.filter((bk)=>(bk.publish>=1995 && bk.gener==='history'));



console.log(userBook1);
