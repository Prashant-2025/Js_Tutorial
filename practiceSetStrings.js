// Q.1:- What will the following print in javascript? console.log("har\"".length)
console.log("har\"".length); //It will print 4 as \ is an escape sequence character will not included in string

// Q.2:- Explore the includes, startsWith & endsWith methods of a string
const sentence = 'The quick brown fox jumps over the lazy dog.';
const word = 'fox';
console.log(sentence.includes(word)); //includes return true or false by checking the word is present or not
console.log(`The word "${word}" ${sentence.includes(word)?'is':'is not'} in the sentence`);

// startsWith also returns true or false if the string starts with specified word

// endsWith also returns true or false if the string ends with specified word


// Q.3:- Write a program to convert a given string to lowercase
console.log(sentence.toLowerCase());


// Q.4:- Extract the amount of this string. "Please give Rs 1000"
let str = "Please give Rs 1000";
let amount = Number.parseInt(str.slice("Please give Rs ".length));
console.log(amount);
console.log(typeof(amount));


// Q.5:- Try to change 4th character of a given string. "Were you able to do it?"
let str1 =  "Were you able to do it?";
str1[3] = "T";
console.log(str1);  //str1 cannot be changed becuase string is immutable