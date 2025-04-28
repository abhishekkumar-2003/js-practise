//if
/*
if(true){
console.log("always run");
}

if(false){
console.log("never run");
}
*/
// operator
//<, > ,<= ,>=, ==, ===(ites also check data type), !==,!=
// if(2==2){
// console.log("true");
    
// }
// if(2=="2"){
//     console.log("true in case od 2 is in or string in ==");
// }
// if(3==="3"){
//     console.log("chek");//false dince === chek typeof
    
// }
/*
5 == "5"     // true    (value is same, type ignored)
5 === "5"    // false   (value same but number ≠ string)

5 != "5"     // false   (value same, type ignored)
5 !== "5"    // true    (value same, but type different)

7 != 8       // true    (values are different)
7 !== 8      // true    (values different, so types checking doesn't matter here
 */

// if(2!=="2"){
//     console.log("true in case od 2 is in or string in ==");
// }

const logedIn = true;
const logedByGmail = true;
const logedByEmail = false;
const userName = "abhi";
if(logedIn && logedByEmail){

    //const userName = "abhi";
    console.log( `logedIn by ${userName}`);
}else if(logedByGmail && logedIn){
    console.log(`logEdIN by Gmail by ${userName}`);
    
}