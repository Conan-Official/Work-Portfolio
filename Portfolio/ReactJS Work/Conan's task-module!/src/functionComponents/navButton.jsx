import React from "react"; 



let buttonAppear = () => {
    const taskBox = document.querySelector(".taskBox"); 
    const taskBoxBtn = document.querySelector(".loader .taskBox #taskBox-btn");
    let btnopacity = 0; 
    let tbBoxShad = 0; 
   
    let btnTimer = setInterval(function () {
        if (btnopacity >= 1 &&  tbBoxShad >=.8) {
            clearInterval(btnTimer);
            return;
        } 
            btnopacity = btnopacity + .045; 
            tbBoxShad = tbBoxShad + .057;
            taskBox.style.boxShadow="0px 0px 30px 3px rgba(6, 231, 247,"+ tbBoxShad +"";
            taskBoxBtn.style.opacity = btnopacity; 
            

            console.log(btnopacity); 
    }, 60);
}


let onClick = () => {
    let navBtn = document.getElementById("nav-btn"); 
    let loader = document.getElementsByClassName("loader");
    navBtn.setAttribute("disabled", "disabled"); 
    for (let i = 0; i < loader.length; i++) {
        let loaderMod = loader[i].style;
        loaderMod.opacity="1";
        loaderMod.transition="all 600ms ease";
        loaderMod.width="100%";  
        loaderMod.height="100%"; 
        
    } 
    window.setTimeout(function() {
        let taskbox = document.querySelector(".loader .taskBox");
        taskbox.style.transition="all 500ms ease"; 
        taskbox.style.margin="5% auto"; 
        buttonAppear(); 
    }, 500); 

     
    //alert("Coming Soon");
    console.log("Comming Soon");
}

let NavButton = () => {
    return(<React.Fragment><button id="nav-btn" onClick={onClick}>View Tasks</button></React.Fragment>);
}

export default NavButton; 