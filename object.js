


// Object.create  ==> singelton
//object literals

const mysymb= Symbol("key1")

const jsusers={
    name: "avinash",
    age:20,
    location:"bihar",
    email: "ak@google.com",
    [mysymb]: "mykey1",
   "Fullname" : "avinash kumar", // this can be access diff way
    Lastloggedin:["monday","saturday"]

}

console.log(jsusers.age);
console.log(jsusers[" Fullname"]); // accesing of full name
console.log(jsusers[mysymb])
console.log(typeof(mysymb))

//changing the objects key value
jsusers.email="chatgpt@gmail.com"
// Object.freeze(jsusers)

jsusers.email="ak@microsoft.com";
console.log(jsusers);

jsusers.greetting=function(){
console.log("hello js users");
}
jsusers.greetting2=function(){
    console.log(`hello js users,${this.name}`);// this is used for to get objects's inside property value
    }

console.log(jsusers.greetting());
console.log(jsusers.greetting2());


/////////***********///////// 

// const tinderuser= new Object();
const tinderuser= {}
tinderuser.id="123abc"
tinderuser.name="avinash"
tinderuser.loggedin=false

// console.log(tinderuser);
const regularuser={
    email: "some@gmail.com",
    fullname: {
        usersfullname: {
            firstname:"avinash",
            lastname: "kumar"
        }
    }
}
// console.log(regularuser.fullname.usersfullname.lastname);

// console.log(regularuser);

const obj1= {1: "a",2: "b"}
const obj2= {3: "c",4: "d"}
const obj3= Object.assign(obj1,obj2); // => MERGING THE TWO OBJECTS
console.log(obj3);




