let button = document.querySelector("#submit");
let list = document.querySelector("#list");
let input = document.querySelector("#add");

function inputValueCheck() {
    return input.value.length; 
}

function createListElement() {
    const li = document.createElement("li"); 
    li.appendChild(document.createTextNode(input.value));
    list.appendChild(li);  
    input.value = "";
}

function createAfterEnter(event) {
    if (inputValueCheck() === 0) {
        console.log("Please enter something to the list");
        return;
    } else if(inputValueCheck() > 0 && event.keyCode === 13) {
        event.preventDefault();
        createListElement();
      }
}

function createAfterClick() {
    if (inputValueCheck() === 0) {
        console.log("Please enter something to the list");
        return;
    } else if (inputValueCheck() > 0) {
        createListElement();    
    } 
}

button.addEventListener("click", createAfterClick); 
input.addEventListener("keypress", createAfterEnter);