// Conditional Expressions: When we have to check the conditions whether they are true or false there we have to use conditionals.
// Let's understand with an example: We have to write a program to check whether the age is valid for driving or not?

// If-Else
let a = prompt("Hey! What's your age?");
age = parseInt(a);
console.log(typeof age);
if(age<0){
    console.log("It is an invalid age..");
}
else if(age<9){
    console.log("You are a kid you cannot even think of driving");
}
else if(age>=9 && age<18){
    console.log("You are a kid you can think of driving after 18");
}
else{
    console.log("You can drive");
}

// Switch 
let month = 3;
switch(month){
    case 1:
        console.log("Jan");
        break;
    case 2:
        console.log("Feb");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;
    default:
        console.log("Default case matched");
        break;
}


// Truthy & Falsy values:-
// We assume some values as truthy and some as falsy.

/*
    Truthy Values: true, [], "0", 'false', " ", {}, function(){}
    Falsy Values: false, 0, -0, BigInt 0n, "", null, undefined, NaN
*/


// Nullish Coalescing Operator (??) : null, undefined
// This operator is used in case to prevent the response from null or undefined

let val1;
val1 = 5 ?? 10;     // Here 5 will be the output
val1 = null ?? 10;  // Here 10 will be the output because it will prevent from null
val1 = undefined ?? 15
val1 = null ?? undefined ?? 20  // Here it will print 20 by preventing from null and undefined


// Terniary Operator : It is also used to check the condition like if else statement
//  condition ? true : false

let iceTeaPrice = 100;
iceTeaPrice <= 80 ? console.log("Less than 80") : console.log("More than 80");