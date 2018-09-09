import React from "react"; 

let close = () => {
    let navBtn =document.getElementById("nav-btn");
    let loader = document.getElementsByClassName("loader");
    let taskbox = document.querySelector(".loader .taskBox");
        
    taskbox.style.transition="all 500ms ease"; 
    taskbox.style.margin="-40% auto"; 
    navBtn.removeAttribute("disabled"); 

    window.setTimeout(function() {
        for (let i = 0; i < loader.length; i++) {
            let loaderMod = loader[i].style;
            loaderMod.transition="all 600ms ease";
            loaderMod.height="0%"; 
            loaderMod.width="0%"; 
            
        } 
    },500);

    window.setTimeout(function() {
        for (let i = 0; i < loader.length; i++) {
            let loaderMod = loader[i].style;
            loaderMod.opacity="0";
        }
    }, 500);
}





let closeButton = () => {
    return(<React.Fragment>
        <button id="taskBox-btn" onClick={close}>X</button>
    </React.Fragment>); 
}

export default closeButton; 