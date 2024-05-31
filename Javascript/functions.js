
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