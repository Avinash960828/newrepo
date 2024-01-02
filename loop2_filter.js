// in the filter it returns the value but in the foreach it does not return


// const Mynum=[1,3,4,5,6,7,8];
//  const newnums=Mynum.filter((num)=> num>4
  
// )

// console.log(newnums);




// const Mynum2=[4,5,6,7,9,74,6]
// const newnums2=Mynum2.filter((num)=>{
 
//    return num<6
// })

// console.log(newnums2);


// const newnums=[]
// const num3= [3,4,5,6,7,8,9,10]
// num3.forEach((num)=>{
//     if(num>4){  
//         newnums.push(num)
//     }
// })
// console.log(newnums);


// //////map//////
// const num4= [3,4,5,6,7,8,9,10]
//  const newnum=num4.map((num)=>num+2).map((num)=>num*10).filter((num)=>{
//     return num>=80
//  })
//  console.log(newnum);



//  ///reduce////



const num5=[1,2,3,4]
const initial=0
const sum=num5.reduce((initial,num)=>initial+num)
console.log(sum);



const sum2=num5.reduce( function(initial2,num){
    console.log(`initial:${initial2}`);
    console.log(`currentvalue:${num}`);
    return initial2+num;
},0)// here 0 is the accumulator or initial value
console.log(sum2);
