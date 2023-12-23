function saymyname(){
    console.log("my name is avinash");
}
saymyname()


function addtwonum(num1,num2){
// console.log(num1+num2);
// console.log("hitesh");
return num1+num2;
}

console.log(addtwonum(2,4));

function loginusermessage(username){
    if(username===undefined){
console.log("please enter user name");
return
    }
    return `${username} just logged in`
    
}

console.log(loginusermessage());


//////****************//////////////////
function calculatecartprice(...num1){   // rest operator ...(triple dot)
    return num1

}
console.log(calculatecartprice(200,500,600));



///////////////**************///////////////

function calculatecartprice2(val1,val2,...num1) {
return num1;
    
}
console.log(calculatecartprice2(200,440,600,500));// in this case 600 and 500 will goes in an array


const user={
    username: "hitesh",
    price:199
}
///////////object in fn ///////////
function handleobject(anyobject){
console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}
handleobject(user)

handleobject( {username: "hitesh",
price:199}) // samething will be printed as above


///////////array in fn//////


const myArray=[300,500,305,400,340,200]
function returnSedcondValue(getarray) {
    return getarray[1]
}
console.log(returnSedcondValue(myArray));


const user2={
    username: "avinash",
    price:999,
    welcomeMessage: function(){
        console.log(`${this.username},welcome to this page`);// this is usded for showing current conteext

    }

}

user2.welcomeMessage()
console.log(this);
user2.username="sam"
user2.welcomeMessage()
console.log(this);



////////////arrow function/////////////


// 


const chai = function(){
    let username= "hitesh"
    console.log(this.username);

}
/////////arrow function

const chai3 =() => {
    let username= "hitesh"
    console.log(this.username);

}

chai3()





//  const AddTwo = (a,b)=>{
//     return a+b
//  }
//  console.log(AddTwo(3,6));



//  implicit return 


const AddTwo = (a,b) =>  (a + b)
console.log(AddTwo(7,8))
 

