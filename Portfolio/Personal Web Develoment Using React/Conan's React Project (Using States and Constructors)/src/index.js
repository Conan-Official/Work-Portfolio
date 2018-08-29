
// --- React req Imports --- // 
import React from "react"; 
import ReactDOM from "react-dom";

// ---- Importing Custom CSS StyleSheet ---//
import "./index.css"; 


// --- Component Imports ---// 
import Navigation from "./components/navigation"; 
import Home from "./components/home"; 


// --- End of Imports --- // 


/* -------------------------
    @author Conan Mafnas
    Title: React Constructors and States 

    Notes: Constructor and States 

    constructor(props) {
        super(props)
    }


    state = {

    }
 --------------------------- */



let destination = document.getElementById("root"); 

ReactDOM.render(<React.Fragment>
   <Navigation/>
   <Home number={22}/>
</React.Fragment>, destination); 

