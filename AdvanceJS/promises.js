const promiseOne = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async Task 1 is completed");
        resolve();
    }, 1000)
})
promiseOne.then(function(){
    console.log("Promise One Consumed");
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async Task 2 is completed");
        resolve();
    }, 1000)
}).then(function(){
    console.log("Promise Two Consumed");
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Prashant", email: "prashant@gmail.com"});
    }, 1000)
})
promiseThree.then(function(user){
    console.log(user);
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({username: "Prashant", password: "12345"});
        } else{
            reject("ERROR: Something went wrong");
        }
    }, 1000)
})

promiseFour.then((user)=>{
    console.log(user);
    return user.username;
}).then((myUsername)=>{
    console.log(myUsername);
}).catch(function(error){
    console.log(error)
}).finally(()=>{
    console.log("The promise is either resolved or rejected");
})

// async await -> This approach works as firstly it waits for sometime until the eexecution takes place then it renders the output.
//      It gracefully doesn't handle catch. Due to this issue sometimes we doesn't prefer this approach.

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username: "Javascript", password: "12345"});
        } else{
            reject("ERROR: JS went wrong");
        }
    }, 1000)
})

async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
consumePromiseFive();

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

// getAllUsers();

fetch('https://api.github.com/users/prashantthakur')
.then((response)=>{
    return response.json();
}).then((data)=>{
    console.log(data);
}).catch((error)=> console.log(error))