//Creating an Objects
/*
1. Using curly brackets.
2. Using new Operators.
*/

let obj1 = {
    key1:'value1',
    key2:'value2'
};

console.log(obj1.key1)

// Using new Operator
let obj2 = new Object({
    key1:"Value of Obj2",
    key2:"Value of Obj2"
})

console.log(obj2.key2);


//Accessing object values 
// 1. Dot operator 
// 2. Square Brackets

console.log(obj1["key1"])
console.log(obj2["key2"])

console.log(obj1);
// Deleting property
delete obj1["key1"]

console.log(obj1);

// Traversing objects

obj3 = {
    name:'Satyam',
    age:26,
    phone_number:7045053925,
    email_id : 'warghatsatyam33@gmail.com'
}

for (item in obj3){
    console.log(item, "-->" ,obj3[item]);
}


// Nested Objects

let student = {
    name:"Satyam",
    age:25,
    phone_number:7045053925,
    address:{
        city:"Kalyan",
        pin_code:421306,
    }
}

console.log(student);

console.log(student["address"]["city"]);
console.log(student["address"]["pin_code"]);
