var demo_id = document.getElementById("demo")
demo_id.style.borderColor = "green";

let demoElements = document.querySelectorAll(".demo")
console.log(demoElements);

demoElements.forEach(ele => {
    ele.style.borderColor = "blue"; 
})

// Chaning second demo div text content
demoElements[1].textContent = 'Second Element of Class';