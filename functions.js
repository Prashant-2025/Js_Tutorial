/* Functions in JS
    Functions are the block of code created once and used many times for the execution of a specific task.
    Syntax: 
    // Funtion without parameter
    function function_name(){
        // code to be executed
    }

    // Function with parameters
    function function_name1(parameter1, parameter2){
        // code to be executed
    }
*/

// Example of function without parameter
function hello(){
    console.log("Hello you are welcome!!");
}
hello();

// Example of function with parameters
function avg(x,y){
    console.log("Done");
    return (1+(x+y)/2);
}

let a = 1;
let b = 2;
let c = 3;

console.log("One Plus Average of a and b is: "+avg(a,b));
console.log("One Plus Average of b and c is: "+avg(b,c));
console.log("One Plus Average of a and c is: "+avg(a,c));

// Exapmle of Arrow Function
const sum = (p,q)=>{
    return p+q;
}
console.log(sum(9,7));

// Rest Operator ... -> It is used to bundle up all the arguments with a single parameter passed during function calling/invoking.
function calculateCartPrice(...num){    //Here rest operator will bundle up all values passing into the parameter
    return num;
}

calculateCartPrice(100, 200, 400, 2000);    //An array of all the arguments passed into the function will return.

// Function with Objects
let user = {
    username : "Prashant",
    price : 199
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}
handleObject(user);
handleObject({
    username : "Sam",
    price : 399
})

// Function wuth Arrays

let myNewArray = [200, 400, 100, 600];
function returnSecondValue(getArray){
    console.log(`Second value is ${getArray[1]}`);
}

returnSecondValue(myNewArray);
returnSecondValue([200, 700, 500, 2000]);
