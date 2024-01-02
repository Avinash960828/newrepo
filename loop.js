// for loop

// for (let index= 0;index<=10; index++) {
//     const element = index
//     if(element==5){
//         console.log("5 is best");
//     }
//     console.log(element);
    
// }


// for (let i = 0; i <=10; i++) {
//     console.log("outer loop");
//     console.log(i);
//     for (let j = 0; j <=10; j++) {
//       console.log("inner loop");
//         console.log(j);
//     }
    
// }

// for (let i = 1; i <=10; i++) {
    
//     for (let j = 1; j <=10; j++) {
//      console.log(i+ " * "+j+ "=" + " "+i*j);
//     }
    
// }



//////break and continue///////

for (let i = 0; i <=20; i++) {
    if (i==5) {
        console.log("5 detected");
        //break
 continue;
    }
   console.log(`value of i is ${i}`);
    
}




////////while////////////
let i=0
while (i<=10) {
    console.log(`value is ${i}`);
    i++
}



////// for of loop

const arr= [1,2,3,4,5,7,8]
for (const num of arr) {
    console.log(num);
}


const greeting = "hello world"
for (const greet of greeting) {
    console.log(greet);
}



//////Maps///////
// maps are not itterable

const map1 = new Map();

map1.set('a',6)
map1.set('b',8)
map1.set('IN',"india")
console.log(map1.get('a'));

for (const [key, value] of map1) {
    console.log(key,value);
}




/////for in loop  it generally shows key
//uses in object
Myobject={
    name: "avinash" ,
    age:20,
    state: "bihar"
}
for (const key in Myobject) {
   console.log(Myobject[key]);
}


// for each loop in js 

const coding=["js","java","python","ruby"]

coding.forEach((item)=>{
console.log(item);
})

// coding.forEach(function(item) {
//     console.log(item);
// })


/////////
