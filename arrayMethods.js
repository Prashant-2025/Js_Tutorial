// Array Methods
// There are some important methods of Array in Javascript. Some of them are as follows:
// 1. toString() -> Converts an array to a string of comma seperated values.
let n = [1, 7, 9];
console.log(n.toString());

// 2. join() -> Joins all the array elements using a seperator
let a = [1, 7, 9];
console.log(a.join("-"));

// 3. pop() -> Removes last element from an array
let b = [1, 2, 4];
console.log(b.pop());  //pop()-> updates the original array and returns the popped value
console.log(b);

// 4. push() -> Adds the new element at the end of the array
let arr = [2, 4, 6, 8];
console.log(arr.push(10));  //Modifies the original array and returns the new array length
console.log(arr);

// 5. shift() -> Removes first element and returns it

// 6. unShift() -> Adds new element to the beginning. Returns new array length

// 7. delete() -> Array elements can be deleted using delete operator.
let d = [7, 8, 9, 10];
console.log(delete d[1]);
console.log(d);

// 8. concat() -> Used to join arrays to a given array
let a1 = [1, 2, 3];
let a2 = [4, 5, 6];
let a3 = [7, 8, 9];
let newArray = a1.concat(a2, a3);  //Returns a new array and does not change the existing array 
console.log(newArray);

// 9. sort() -> Sort method is used to sort an array alphabetically
let a4 = [7, 9, 8];
a4.sort(); //a4 changes to [7, 8, 9] and modifies the original array
console.log(a4);
// Sort takes an optional compare function. If this function is provided as first argument the sort()
// will consider these values(values returned from the compare function) as the basis of sorting
let compare  = (a, b)=>{
    return a-b;
}
let num = [550, 34, 229, 6, 5, 8, 3, 445];
console.log(num.sort());
num.sort(compare);
console.log(num);

// 10. reverse() -> Reverses the element in the source array
let num1 = [23, 45, 67, 89];
num1.reverse();
console.log(num1);

// 11. splice() -> Splice method is used to add new items to an array
const numbers = [1, 2, 3, 4, 5];
numbers.splice(2, 1, 23, 24); //Returns deleted items and modifies the array
// 2 -> position to add | 1 -> No of elements to remove | 23, 24 -> Elements to be added
console.log(numbers);

// 12. slice() -> Slices out a piece from an array. It creates a new array
let num2 = [1, 2, 3, 4, 5];
let num3 = num2.slice(2);
console.log(num3);
let num4 = num2.slice(1, 4);
console.log(num4);