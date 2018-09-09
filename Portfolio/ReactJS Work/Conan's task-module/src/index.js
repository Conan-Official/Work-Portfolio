import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

/*----------------------------------------------------- 
   
    @author: Conan Mafnas
    Title: React Practice w/ custom functional Components
 
 
    ------------------------------------------------------ */


// Main classComponent import

import Main from "./classComponents/main"; 
let root = document.getElementById("root");


//Render to the DOM 
ReactDOM.render(<Main/>, root); 


