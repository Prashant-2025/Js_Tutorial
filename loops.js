/* Loops in JS
    Loops are the blocks of code which are used to perform iterations to execute a specific code no. of times.
    Ex: If we have a task to print numbers from 1 to 100 then it will be very difficult to print manually
    then we will use loops for automating such tasks.

    Types of Loops:-
    There are various types of loops:
    1. For Loop: Loops a block of code no. of times.
    Syntax:
    for(initialization; condition or expression; increment or decrement){
        code to be executed
    }
    

    2. For in Loop: Loops through the keys of an object.
    Syntax:
    for(key in object){
        code to be executed
    }


    3. For of Loop: Loops through the values of an object. It is used for iterable data structures only.
    Syntax:
    for(variable of iterable){        //variable -> for every iteration | iterable -> any iterable data structure like arrays, strings, etc.
        code to be executed
    }


    4. While Loop: Loops a block based on specific condition.
    Syntax:
    while(condition){
        code to be executed
    }


    5. Do-while Loop: While loop variant which runs atleast once.
    Syntax:
    do{
        code to be executed
    }while(condition);

*/

// Exapmle of For Loop:
for(let i=0;i<5;i++){
    console.log(i);     //Print numbers from 0 to 4
}

// Example of For in Loop:
let students = {
    Harry: 90,
    Shiv: 80,
    Anuj: 88,
    Shivalik: 78
}

for(let student in students){
    console.log("Marks of "+student+" are "+students[student]);
}

// Example of For of Loop:
let places = ["Delhi", "Noida", "Gurugram", "Ayodhya", "Baghpat"];
for(place of places){
    console.log(place);
}

// Example of While Loop:
let num=0
while(num<5){
    console.log(num);
    num++;
}

// Exaple of Do-while Loop:
let j=0;
do{
    console.log(j);
    j++;
}while(j<0);