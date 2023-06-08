// 1. Create a variable to type a string and try to add a number to it
let str="Prashant";
console.log(str);
console.log(str+25);

// 2. Use typeOf to find  the datatype of string in the last question
console.log(typeof(str));

// 3. Create a const objects in javascript. Can you change it to hold a number later? 
const obj={
    name: "Prashant",
    section: 1,
    isPrincipal: false
}

// obj = 54;     No, we cannot change a const object to a number later

// 4. Try to add a new key to the const object in question 3. Were you able to do it?
obj['friend']="Shubham"
obj['name']="Aditya"
console.log(obj)

// 5. Write a Js program to create word meaning dictionary of 5 words
const dict={
    consider: "deem to be",
    minute: "infinitely or immeasurably small",
    accord: "concurrence of opinion",
    intend: "have in mind as a purpose",
    approach: "move towards"
}
console.log(dict);