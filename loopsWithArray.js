// Using Loops with Array
// Arrays can be looped through using classical for loop in Js and some other methods.
// Example of classical for loop
let num = [3, 45, 23, 2, 67];
// for (let i=0; i<num.length; i++){
//     console.log(num[i]);
// }

// For Each Loop: Calls a function once for each array element
/*
    Syntax:
    const a = [1, 2, 3];
    a.forEach((value, index, array)=>{
        // function logic
    })
*/
num.forEach((element)=>{
    console.log(element * element);
})

// Array.from: Used to create an array from any other object
let person = "Prashant";
let arr = Array.from(person);
console.log(arr);

// for...of: For-of loop is used to get values from an array
for(let item of num){
    console.log(item);
}


// for...in: For-in loop is used to get keys of an array
for(let i in num){
    console.log(i);  //Print all keys of an array because array is also an object
    console.log(num[i]);  //Print all the values of an array
}


// Higher Order Array Methods:-
// map() -> Creates a new array by performing some operations on each array element
let arr1 = [23, 45, 56, 67, 89];
let a =  arr1.map((value, index, array)=>{
    console.log(value, index, array);
    return value + index;
})
console.log(a);

// filter():- Filters an array with values that passes a test and also creates a new array
let arr2 = [2, 5, 0, 34, 12, 56, 77];
let a2 =  arr2.filter((value)=>{
    return value<15;
})
console.log(a2);

// reduce():- Reduces an array to a single value
let arr3 = [1, 3, 2, 5, 8, 5];
const reduce_func = (h1, h2)=>{
    return h1+h2;
}
let a3 = arr3.reduce(reduce_func); //Access elements of array as 1+3+2+5+8+5 and will give the output 24
console.log(a3);