import React from "react"; 
import '../css/header.css'; 



const Header = ({title}) => {
    return(
   <React.Fragment>
       <header>
           <h1>{title}</h1>
       </header>
   </React.Fragment>); 
}

export default Header; 