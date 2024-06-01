// Array can be created in two ways 
// Creating an array using square brackets
// Using Array object to create array

// using square brackets
var arrayName = ['val1','val2','val3']
console.log(arrayName,typeof arrayName);


// using Array Objects
var arrayName = new Array('val1','val2','val3','val4')
console.log(arrayName);

// Array can contains Heterogeneous element
var arrayName= ["Val1",20,['s','a']]
console.log(arrayName);

// Accessing element in Array using indexing
console.log(arrayName[0]);
console.log(arrayName[5]);