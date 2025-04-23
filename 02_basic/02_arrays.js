const marvel_heros= ["ironman", "thor", "hulk", "antman", "captain marvel"];
const dc_heros= ["superman", "aquaman", "batman"];
// marvel_heros.push(dc_heros);
// console.log(marvel_heros);// does not marge bot array but take dc as a complete array in marvel array
//console.log(marvel_heros.concat(dc_heros));// return new array with mergimg each element of both array
const all_heros= [...dc_heros,...marvel_heros];//similar to .concat()
//console.log(all_heros);

const another_array =[1,2,4,5,[6,7,8],9,5,7,[10,11,13,[2,5,7,9],7]];
//console.log(another_array.flat(Infinity));

console.log(Array.isArray("Abhishek"));
console.log(Array.from("Abhishek"));
console.log(Array.from({name: "Abhishek"}));//intresting

let score1 = 100;
let score2 =200;
let score3 = 300;
console.log(Array.of(score1,score2,score3));

