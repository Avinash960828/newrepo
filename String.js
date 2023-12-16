const name ="avinash";
const count =50;
console.log(`hello my name is ${name} and my repo count is ${count}`);

const gameName= new String('avinash')
// console.log(gameName.__proto__);

console.log(gameName.length);

console.log(gameName.charAt(2))
console.log(gameName.indexOf("s"));

const newString= gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-8,3)
console.log(anotherString);

const newStringone ="  avinash   ";
console.log(newStringone);
console.log(newStringone.trim());

// console.log(newString.trimEnd());

console.log(gameName.includes("avinas"));

console.log(gameName.split(""));

// go on mdn and once see and explore the string methods 👍
