import React from "react"; 
import ReactDOM from "react-dom"; 
import "./index.css"; 

/* -----------------------------------
    @author Conan Mafnas
    Reviewing: Renders, Components, Props, PropTypes, Constructors, States




---------------------------------------*/
// ---  Component imports  ---//
import Home from "./components/Home"; 



// ---------------------------// 

// Rendering to the main root of the project

let domDestination = document.getElementById("root");

ReactDOM.render(<React.Fragment>
<Home /> 

</React.Fragment>, 
domDestination); 