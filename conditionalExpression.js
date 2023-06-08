// Conditional Expressions: When we have to check the conditions whether they are true or false there we have to use conditionals.
// Let's understand with an example: We have to write a program to check whether the age is valid for driving or not?

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