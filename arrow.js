const user = {
    userName : "prashant",
    price : 999,
    welcomeMessage : function(){
        console.log(`${this.userName}, welcome to website`);
        // console.log(this);  //Here this refers to the current context i.e. user object
    }
}

// user.welcomeMessage();
// user.userName = "sam";
// user.welcomeMessage();

// console.log(this);  //Here this will refer to the global object and will print empty object {}

// function chai(){
//     console.log(this);  // This will give output as a set of all functions of objects in global
// }
// chai();

const chai = () => {
    console.log(this);
}
chai();     // This will give output as an empty object in case of arrow function.

// Arrow Functions

// const addTWo = (num1, num2) => {
//     return num1 + num2;      This will return the result explicitely.
// }
// console.log(addTWo(3, 4));

// const addTwo = (num1, num2) => (num1 + num2);   //This will return implicitely.
const addTWo = (num1, num2) => ({userName : "Prashant"});   // This will return the object implicitely.

console.log(addTwo(4, 7));

