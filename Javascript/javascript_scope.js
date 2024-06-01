// var i=10;
// function abc(){
//     i='Hello'
//     var j = 13
//     console.log(i,j);
// }
// //console.log(i,j)
// abc()

var x = 0;
function abc(){
    var x=10;
    console.log(x);
}

abc()
console.log(x)


// Function within Function

function totalCount(){
    var count = 0;
    function increaseCount(){
        count++;
    }
    increaseCount();
    increaseCount();
    increaseCount();
    return count;
}

console.log(totalCount())


/*
In javascript when a variable is used inside a function it will be first checked inside the function,
if not available then it will be checked in outside function, if still not found then it will move to the outer scope of the parent and 
check it and it will do the same until the variable is not found. The search goes on till it reaches gloabal level and not found here then
it will throw an error
*/

// Function Decelaration and Expression
// Function in javascript can be created in two ways 1. Function Definition and 2.Function Expression
console.log("Function Learning ")
function abc(a){
    a = 20;
    console.log(a);
}

var a = 10;
abc(a)
console.log(a);

/*
here because primitive value is passed to function then it is passed by value ie the change to variable do no impact or cause any change in 
gloabl and it only remains local
*/

// Passing non primitive value like array

function modifyArray(arr){
    arr[1] = arr[0];
    console.log(arr);
}

arr = [10,20,30]
// console.log(arr);
// modifyArray(arr)
// console.log(arr);

// Function Expression

var factorial = function fac(n){
    return n<2 ?1:n*fac(n-1);
}
console.log(factorial(3))

var greetingMessage = function(){
    return 'Hello'
}

// console.log(greetingMessage())



// Callback function

function abc(a, b, compute) {
    compute(a, b);
}

function add(a, b) {
    console.log(a + b);
}

function multiply(a, b) {
    console.log(a * b);
}

abc(5, 3, add);       // Output: 8
abc(5, 3, multiply);  // Output: 15
