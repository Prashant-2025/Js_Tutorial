// Objects in JS : Object is the data type that stores the values in the form of key-value pairs.

let mySym = Symbol("key1");
const jsUser = {
    name: "Prashant",
    "full name": "Prashant Thakur",
    age: 25,
    [mySym]: "myKey1",
    location: "Noida",
    email: "prashant@google.com",
    isLoggedIn: false,
    lastLoginDats: ['Monday', 'Saturday']
}

console.log(jsUser.email);
console.log(jsUser["email"]);
console.log(jsUser["full name"]);
console.log(jsUser[mySym]);

jsUser.email = "prashant@chatgpt.com";
// Object.freeze(jsUser);
jsUser.email = "prashant@microsoft.com";
console.log(jsUser);

jsUser.greeting = function(){
    console.log("Hello JS User");
}

console.log(jsUser.greeting());

jsUser.greetingTwo = function(){
    console.log(`Hello JS User, ${this.name}`);
}

console.log(jsUser.greetingTwo());

const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "c", 4: "d"};
const obj3 = {5: "e", 6: "f"};

const obj4 = Object.assign({}, obj1, obj2, obj3);  // Assign method copy the values of all of the enumerable own properties 
                                                    // from one or more source objects to a target object. Returns the target object.

const obj5 = {...obj1, ...obj2, ...obj3};  // We can also use spread operator for combining two or more objects. 

let user = [
    {
        id: 1,
        email: "a@gmail.com"
    },
    {
        id: 2,
        email: "b@gmail.com"
    },
    {
        id: 3,
        email: "c@gmail.com"
    }
]

console.log(user[1].email);

console.log(Object.keys(jsUser));  // It will return an array of keys of an object.
console.log(Object.values(jsUser));  // It will return an array of values of an object. 
console.log(Object.entries(jsUser));  // It will return an array of arrays of key-value pair of an object.
console.log(jsUser.hasOwnProperty('isLoggedOut'));  // It is used to check whether the property exist in the object or not and returns boolean value.
