/*                              **********************Let and Const***********************
Temporal Dead Zone :- It is the phase from hoisting to the initialization of the variable. Means when we declare a variable it just get
    some space in memory and assigned with a placeholder undefined and when the variable is assigned with some value then the gap from 
    declaration till assignment of value to the variable is known as temporal dead zone.
    Ex: 
        console.log(a);
        let a = 10;
        var b = 100;
    In this example it will give a reference error because we are accessing a in the temporal dead zone, means we are accessing 
    the value of a before its initialization.

Reference Error:- It is the error which comes when we try to access the variable before its initialization.

Syntax Error:- It is the error which comes when dublicate variables are declared.

Type Error:- It is the error which comes when we assign a new value to the constant variable.
*/