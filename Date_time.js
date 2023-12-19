let myDate= new Date()
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);


let Mycreateddate1= new Date(2023,0,23)
let Mycreateddate2= new Date(2023,0,23,5,3)
let Mycreateddate3= new Date("2023-01-14")
let Mycreateddate= new Date("01-14-2023")
console.log(Mycreateddate.toLocaleString()); //=> it makes easy to read .toDateString()
let myTimeStamp= Date.now()
console.log(myTimeStamp);
console.log(Mycreateddate.getTime());
console.log(Math.floor(Date.now()/1000)); //==> gives time in ms now converting in sec by dividing 1000

let newDate= new Date();
console.log(newDate.getMonth()); // there are so many methods to know dates in diff way like months ,day etc


newDate.toLocaleString('default',{
    weekday: "long",
})



// its basic of date and time
// we have to cover it 