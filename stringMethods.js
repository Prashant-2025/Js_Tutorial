// String Methods
let person = "Prashant";
console.log(person.length);     //length is a property of a string
console.log(person.toUpperCase());  //Prints string in uppercase
console.log(person.toLowerCase());  //Prints string in lowercase
console.log(person.slice(2,5)); //Slice creates substring including the characters upto but not including the character indicated by end
console.log(person.slice(2)); //Here end is not specified so substring continues to the end of stringObj
console.log(person.replace("Pra", "Su")); //Replace method replaces the specified characters and creates a new string
let friend = "Naman";
console.log(person.concat(" is a friend of ", friend, " OK"));  //Concat method adds all the specified strings
let friend2 = "      Shubham       ";
console.log(friend2);
console.log(friend2.trim());  //Trim method removes all whitespaces from string

// NOTE: Strings are immutable means it can't ne change string methods always return a new string
// In order to access the characters at an index we use following syntax:
let str = "Shiv";
console.log(str[0]);
console.log(str[1]);
console.log(str[2]);
console.log(str[3]);

// Quick Quiz: Use a for loop to print a string
let j = "";
for(let i=0;i<str.length;i++){
    j+=str[i];
}
console.log(j);