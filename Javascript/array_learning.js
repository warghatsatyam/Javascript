// Array can be created in two ways 
// Creating an array using square brackets
// Using Array object to create array

// using square brackets
var arrayName = ['val1','val2','val3']
// console.log(arrayName,typeof arrayName);


// using Array Objects
var arrayName = new Array('val1','val2','val3','val4')
// console.log(arrayName);

// Array can contains Heterogeneous element
var arrayName= ["Val1",20,['s','a'],undefined,null]
// console.log(arrayName);

// Accessing element in Array using indexing
// console.log(arrayName[0]);
// console.log(arrayName[5]);


//console.log(arrayName.toString());


// Iterating over arrays

var arr = [10,20,30];

// for (var i=0; i<arr.length;i++){
//     console.log(arr[i]);
// }

var items = ['apple','banana','orange']

items.forEach(function(item){
    console.log(item);
})