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

console.log(gameName.includes("avinash"));

console.log(gameName);

// go on mdn and once see and explore the string methods 👍

/**************************math******************/

console.log(Math.floor(Math.random()*10) +1);

const min =1;
const max=6;
//**  memeorise it 
console.log(Math.floor(Math.random()* (max-min +1))+min);