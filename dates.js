// Dates

let myDate = new Date();
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toLocaleString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toJSON());
console.log(typeof myDate);

let myCreatedDate = new Date(2023, 0 , 12, 5, 3);  //Months start form 0 in JS and 5 is hours (hh) and 3 is minutes (mm)
console.log(myCreatedDate.toDateString());
console.log(myCreatedDate.toLocaleString());

//Timestamp
let timestamp = Date.now();
console.log(timestamp);     // Will give time in miliseconds
console.log(Math.round(timestamp/1000));    // Will give time in seconds