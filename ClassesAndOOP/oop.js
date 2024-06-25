const user = {
    username : "Prashant",
    loginCount : 8,
    signedIn : true,
    getUserDetails : function(){
        // console.log("Got User Details form Database");
        console.log(`Username: ${this.username}`);
    }
}

console.log(user.username);
console.log(user.getUserDetails());

// const promiseOne = new Promise();
// const date = new Date();
// new keyword - It is a constructor function which allows us to create multiple instances from a single object.

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;
    this.greetings = function(){
        console.log(`Welcome ${this.username}`);
    }

    return this;
}

const userOne = new User("Prashant", 12, true);
const userTwo = new User("ChaiAurCode", 11, false);
console.log(userOne.constructor);  //Constructor is a reference property about the function or object itself.
console.log(userTwo);

/*
    Benefits of Usage of new Keyword
    1. Fistly by using new keyword an empty object is created which is called instance.
    2. After that constructor function is called because of new keyword and it packs all the arguments and methods and returns them
    3. Then all the arguments and methods are injected to this keyword
    4. At last we get all details in the function
*/