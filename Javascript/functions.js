printAll('Cat','Dog','Lion')
printAll('A','B','C','D','E','F')

// Because of Hoisting it is working correctly we can call the function,variable before the declaration of the same

function greetings(msg="Hello"){
    console.log(msg)
}


greetings("Hi")
greetings()


function printAll(){
    for (var i=0;i<arguments.length;i++){
        console.log(arguments[i]);
    }
}

printAll('Cat','Dog','Lion')
printAll('A','B','C','D','E','F')

