/* String in JS
    Strings are used to store and manipulate the text.
*/
// Strings can be created using the following syntax:
let person = "Prashant";  //Using Double Quotes
// console.log(person);
// console.log(person.length);

let friend = 'Nikhil';   //Using Single Quotes
// console.log(friend);


// Template Literals:- These use backticks instead of quotes to define a string
let boy1 = "Pramod";
let boy2 = "Aarav";
let sentence = `${boy2} is a friend of ${boy1}`
console.log(sentence);

// With template literals it is possible to use single or double quotes inside a string
let s = `My name "is" 'Prashant'`;
console.log(s);

// We can insert variables directly in tempate literal. It is called String Interpolation.
let a = `This is ${person}`;
console.log(a);


// Escape Sequence Character:- If we want to print some special characters inside the string like 
// single or double quote in single or double quote string or new line, etc. then we use escape sequence character denoted by '\'.
// let fruit = 'Bana'na'   Here js will misunderstand
let fruit = 'Bana\'na'; // Here escape sequence character will solve the problem
/* Some escape sequence characters are as follows:
    \n -> New Line
    \r -> Carriage Return
    \t -> Tab
*/