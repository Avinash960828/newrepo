const course= {
    coursename:"js in hindi",
price:"99",
coysreinstructer: "avinash"
}
// course.coysreinstructer
const {coysreinstructer}=course
console.log(coysreinstructer );


/////json/////////
// {
//     "name": "avinash kumar"
//    " coursename":"js in hindi"
//    " price":"free"
// }

[
    {},
    {},
    {}

]



//////this keyword////////////


const user={
    username: "avinash",
    price:999,
    welcomeMessage: function(){
        console.log(`${this.username},welcome to this page`);// this is usded for showing current conteext

    }

}

user.welcomeMessage