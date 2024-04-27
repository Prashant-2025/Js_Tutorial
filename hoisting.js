//**************************Hoisting*****************************//
/*
    Hoisting:- It is the phenomenon in JS by which we can access the variables and functions even before we initialized them.
        For Ex:
            getName();
            console.log(x);

            var x = 10;
            function getname(){
                console.log("Namaste JS");
            }
            console.log(getName);   //It will print the function itself
    
    //Difference between undefined and not defined
        undefined:- It is like a placeholder that is used to allocate memory to the variables in the global or local space before their initialization.
        not-defined:- It is the reference error which comes when the variable is not declared and we are trying to access its value.

        console.log(getName2); //Here it will print undefined as getName2 will work as a variable now.
        var getName2 = () => {                       //Arrow Function
        console.log("Arrow Function");
        }
        console.log(getName2); //Here it will print the whole function getName2 itself.

    -> Another way to write a function:
        var getName3 = function(){
            console.log("Another way to write a function");
        }

    Note:- Shortest JS Program is the empty file of javascript, it is due to JS Engines which creates a global object 
            with its predefined functions even in case of empty file and this global object is called window object.

        -> this keyword: It is the keyword that points out the window object in case of global memory space.

        -> Global Space: It is the space in which we write any code inside JS which is not inside the function.
        
        
*/