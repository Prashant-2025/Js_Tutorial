// Block:- Block is called the compound statement because it is a combination of multiple statements.
// Scope:- Where we can access all variable or function in our code is called Scope.
// let & const are block scoped.
/*Lexical Environment:- It is the local memory along with the lexical environment of its parent. It is basically like a hierarchy 
    of the lexicals of the variables and functions.
*/  
/* Shadowing:- If we have local and global variable with the same name then the local variable shadows the global variable in the block.
    Ex-1: 
        var a = 100;
        {
            var a = 10;  //Here local variable a inside the block is shadowed to the global variable a  
            console.log(a);   //That's why the value of a will be 10 printed here.
        }
    Ex-2:
        let b = 100;
        {
            let a = 10;
            let b = 20;
            let c = 30;
            console.log(a);
            console.log(b);  // Here b is shadowed to the global variable for this particular scope.
            console.log(c);
        }
        console.log(b);  // Here b will print 100 bcoz scope of shadowed b has finished.
*/