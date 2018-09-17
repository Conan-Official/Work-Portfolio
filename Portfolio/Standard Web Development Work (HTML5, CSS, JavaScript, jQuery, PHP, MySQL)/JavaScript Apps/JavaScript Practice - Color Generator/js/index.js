
let red = document.getElementById("red");
let green = document.querySelector("#green"); 
let body = document.getElementById("bg");
let input = document.getElementById("input");



function changeBackgroundColor() {
    body.style.background="linear-gradient(to right,"+ green.value +","+ red.value +")"; 
    input.textContent = body.style.background + ";"; 
}

red.addEventListener("input", changeBackgroundColor); 
green.addEventListener("input", changeBackgroundColor);



console.log("working!");