/*  ************************Closures********************************
    Closure:- Closure means a function bundled with its lexical environment. Or we can say function along with its lexical scope 
        is called closure.

        function x(){
            var a = 7;
            function y(){
                console.log(a);
            }
            return y;
        }

        var z = x();
        console.log(z);
        z();
*/




/*
setTimeout() function:- Used to apply a timer for providing delay to an expression to execute.
Ex-
    
*/

function x(){
    var x =1;
    setTimeout(function(){
        console.log(i);
    }, 3000);
}
// In the above example a simple setTimeout is used for consoling the value of i after 3 seconds. Here setTimeout will store 
// the value of the function somewhere in the memory space and attach a timer to it. After the timer expires it restore the value 
// to the closure and execute the expression.

function x(){
    for(let i=1; i<=5; i++){
        setTimeout(function(){
            console.log(i);
        }, i*1000);
    }
    console.log("Namaste JS");
}
// In the above example in for loop let is used as let is block scoped and as loop iterates then it will provide a new copy of i
// every time by which it will console the value of i after the time(in seconds) equal to i.

function x(){
    for(var i=1; i<=5; i++){
        function close(i){
            setTimeout(function(){
                console.log(i);
            }, i*1000); 
        }
        close(i);
    }
}
// In the above example for the use of var we have used closure for interating the data as per the time. We have created a close function
// and as this close function is called on every iteration with the new copy of i then it will execute the function with a new reference.