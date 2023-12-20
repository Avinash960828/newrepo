


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




