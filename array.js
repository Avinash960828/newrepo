
const MyArr= [0,1,2,3,4,"avinash",true]
// console.log(MyArr[0]);
// //array methods
// MyArr.push(6,7,8) // add these in array

// MyArr.pop(); // remove last value of array
// MyArr.unshift(9)
// MyArr.shift() // it removes the first element of an array
// // console.log(MyArr.indexOf(4));
// const newArr= MyArr.join();
// console.log(newArr);


//slice, splice 
// console.log("a", MyArr);
// myn1= MyArr.slice(1,3);
// console.log(myn1);
// console.log("B", MyArr);

// const myn2=MyArr.splice(1,3); // it also include the last range and also remove the portion of an array which is of myarr
// console.log(myn2);
// console.log("c",MyArr);


// array02 basic//////

const marvel=["thor","ironman","spiderman"]
const dc_heros=["superaman","flash","botman"]
// marvel.push(dc_heros);
// console.log(marvel);
// console.log(marvel[3][2]);

// marvel.concat(dc_heros)
// console.log(marvel);


const allheros= marvel.concat(dc_heros);
console.log(allheros); //==> it returns new array


const all_new_heros=[...marvel,...dc_heros] // all the elements of an array becomes individual
console.log(all_new_heros);



const another_array=[1,2,3,4,[4,5,6,7],8,[6,8,0],[3,5,[3,5,8]]];
const real_another_Array=another_array.flat(Infinity);
console.log(real_another_Array);



console.log(Array.isArray("avinash"));

console.log(Array.from("avinash")); // IT makes array
console.log(Array.from({name:"avinash"})); // gives an empty array


let score1=100;
let score2=300;
let score3=400;
console.log(Array.of(score1,score2,score3));








