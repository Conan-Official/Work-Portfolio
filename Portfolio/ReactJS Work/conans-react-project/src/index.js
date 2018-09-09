/* 
    **@author Conan Mafnas
      Title: Future site template 
                                */

// ------ Main libs for react ----- // 

import React from "react"; 
import ReactDOM from "react-dom"; 

// -----Components------ //
import Header from "./components/header";
import Navigation from "./components/navigation";   
import MainBox from "./components/main-box"; 
import MainBoxes from "./components/main-boxes";
import MainTextBox from "./components/main-textbox";

// -------------------------// 


// ---- Constructor for the DOM ----- // 

const DOM = function () {
    //cacheDOM 
    const root = document.getElementById("root"); 
    const nav = document.getElementById("nav"); 
    const box = document.getElementById("box"); 
    const boxes = document.getElementById("boxes"); 
    const textBox = document.getElementById("main_text");
    //renderDOM 
   
    this.render = function () {
        ReactDOM.render(<Header/>, root); 
        ReactDOM.render(<Navigation/>, nav ); 
        ReactDOM.render(<MainBox/>, box);
        ReactDOM.render(<MainBoxes/>, boxes); 
        ReactDOM.render(
        <React.Fragment>
            <MainTextBox words = "Latest Updates!"/>
        </React.Fragment>
        , textBox); 
        
    }

}




const connectDOM = new DOM(); 



function loader() {
    connectDOM.render(); 
 
    
}

window.addEventListener("load", loader, false); 