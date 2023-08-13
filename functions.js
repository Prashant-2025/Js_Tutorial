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