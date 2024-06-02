// Timing events allow the execution of a piece of code at a specified time interval

/*
setTimeout()
The setTimeout method is used to execute a certin piece of code after certain amount of time
The setTimeout return a positive integer which represents the ID of the timer created

setInterval()
The method is used to execute a piece of code repeatedly with a fixed time interval between each call.


clearTimeout()
The clearTimeout() is used to cancel a timeout establised using setTimeout method.

clearTimeout(timeoutId)
timeoutId is the Id value returned by the setTimeout method

clearInterval()

The clearInterval() method is used to cancel the repeating timed action established using setInterval()
method.

clearInterval(intervalId)

*/

// setTimeout()

set_timeout_id =  setTimeout(()=>{
    console.log("hello");
},2000);

// setInterval()


count=0
set_interval_id = setInterval(()=>{
    count++;
    console.log("Count is ",count);
},1500)


clearInterval(set_interval_id)
clearTimeout(set_timeout_id)

// here the execution of this two statement is executed immedately because the above two things have
// delay of 2sec and 1.5 sec Before it the below to clearInteral and clearTimeout is executed
