// Q.1:- Write a program to print the marks of a student in an object using for loop
// obj = {harry: 98, rohan: 70, akash: 75}

let obj = {
    harry:98,
    rohan:70,
    akash:75
}
for(let i=0; i<Object.keys(obj).length;i++){   //Object.keys will return an array here
    // console.log("Marks of "+Object.keys(obj)[i]+ " are "+ obj[Object.keys(obj)[i]]);
}


// Q.2:- Write a program to print the marks of a student in an object using for in loop
// obj = {harry: 98, rohan: 70, akash: 75}
for(let keys in obj){   //Object.keys will return an array here
    // console.log("Marks of "+keys+ " are "+ obj[keys]);
}


// Q.3:- Write a program to print try again until the user enters the correct number
// let cn = 43;
// let i;
// while(i != cn){
//     i= prompt("Enter a number");
//     console.log("Try Again");
// }
// console.log("You have entered the correct number");


// Q.4:- Write a funtion to print mean of 5 numbers
const mean = (a,b,c,d)=>{
    return (a+b+c+d)/4;
}

console.log("Mean = "+mean(9,7,5,7));