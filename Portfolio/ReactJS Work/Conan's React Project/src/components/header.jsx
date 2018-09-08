import React, {Component} from "react"; 


class Header extends Component {
    styles = {
        fontSize: "23px", 
        textAlign: "center", 
        lineHeight: "80px",
        color: "rgba(255,255,255,.6)",
        textTransform: "uppercase",  
        fontFamily: "sans-serif",
    }; 
    render() {
        
        return(
            <React.Fragment>
                 <h1 className="head" style={this.styles}>Conan's React Template</h1>
            </React.Fragment>
        ); 
        
    }
  
}


export default Header; 

