const player = "Noob Pro";
const count = 50;
console.log(`The ${player} is haker and killed ${count} player.`);

console.log(player);
console.log(player.length);
console.log(player.charAt(7));
console.log(player.indexOf('o'));

const gameName = new String(`smash cars`);
console.log(gameName);
console.log(gameName.length);
console.log(gameName.charAt(7));
console.log(gameName.indexOf('a'));
console.log(gameName.__proto__);

const subName = gameName.substring(0,5);
console.log(subName);
const subS = gameName.slice(-10,-4);
console.log(subS);
/*
slice(start, end) – How it works:
Extracts a substring from start index to one less than the end index.
It does not modify the original string.
Supports negative indexes, which count from the end of the string.
String: "smash cars"
Index (pos):   0 1 2 3 4 5 6 7 8 9
Characters:    s m a s h   c a r s
Negative idx: -10 -9 -8 -7 -6 -5 -4 -3 -2 -1
So:
-10 → "s" (start)
-4 → "a" (end, but not included)
 */
const newString = "      abhishek     kumar.   ";
console.log(newString.trim().replace("     ", "_____"));
console.log(newString.includes('kumar'));//true
console.log(newString.trim().split("  "));