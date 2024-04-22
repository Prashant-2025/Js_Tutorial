// Primives Data Types : These are the data types which basically used by call by value method.  
// There are 7 types of primitive data types - NN SS BB U
let a = null;                               // NULL
let b = 345;                                //NUMBER
let c = "Prashant";                         //STRING
let d = Symbol("I am a nice symbol");       //SYMBOL
let e = true;                               //BOOLEAN
let f = BigInt("567") + BigInt("33");       //BIGINT
let g = undefined;                          //UNDEFINED
console.log(a, b, c, d, e, f, g);

// Non Primitive Data Types - Objects in JS : These are the data types which basically used by call by reference method.
// Objects are the key-value pairs
let person = {
  name: "Prashant",                //Here name is the key and "Prashant is its value"
  age: 25,
  address: "Noida"
}
console.log(person.name);
console.log(person['name']);