import React, {Component} from "react";
import logo from "../img/boxcode.png"; 

/* --------------------------
   
    @author Conan Mafnas
    
    @component: Main-Box 
   --------------------------  */

class MainBox extends Component {

    styles = {

        box: {
            display: "block", 
            margin: "4% auto",
            height: "550px",
            width: "43%",
            background: "rgba(0,0,0,.2)",
            border: "1px solid rgba(110,110,110,.7)", 
            boxShadow: "0px 0px 10px 3px rgba(0,0,0,.7)",
        }, 


        button: {
            display: "block",
            margin: "28% auto", 
            padding: "2%",
            width: "24%",
            background: "rgba(0,0,0,.7)",
            outline: "none",
            color: "rgba(255,255,255,.7)",
            border: "1px solid rgba(110,110,110,.5)",
            fontFamily: "sans-serif", 
            textTransform: "uppercase", 
            borderRadius: "8.5px",
            transition: "all 500ms ease",
        }, 


        img: {
            position: "absolute", 
            height: "550px",
            width: "43.05%",
            zIndex: "-1",

        }


    }

    render() {
       
        const {box} = this.styles;
        const {button} = this.styles; 
        const {img} = this.styles; 
       

        return(<React.Fragment>
                  <span style={box}>
                    <img style={img} src={logo}></img> 
                    <button className="btn-box" style={button}>View Portfolio</button>
                  </span>
                  
               </React.Fragment>);
         
               
    }


     
}

export default MainBox; 