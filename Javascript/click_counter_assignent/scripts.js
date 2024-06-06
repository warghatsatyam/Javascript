let count = 0
var textContent = document.getElementById("text_content")
function count_clicks(){
    if (count == 5){
        textContent.innerText = "You have clicked for 5 times"
    }
    else{
        count+=1
        textContent.innerText = "Box Clicked 0 times"
    }
}