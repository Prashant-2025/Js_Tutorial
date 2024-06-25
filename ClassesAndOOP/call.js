function setUserName(username){
    this.username = username;
    console.log("Called")
}

function createUserName(username, email, password){
   setUserName.call(this, username);   // Call method passes the current execution context to another function 
   this.email = email;
   this.password = password; 
}

const chai = new createUserName("Chai", "chai@fb.com", "1234");
console.log(chai);