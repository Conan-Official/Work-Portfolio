import React, {Component} from "react"; 



class Navigation extends Component {
    
  
    // ----- Header titles ------// 
    titles = {
        Home: "Home",
        About: "About",
        Portfolio: "Portfolio",
        Contact: "Contact",    
    };
    // ----Styles for Navigation ----- // 
    ulStyle = {
        position: "absolute",
        top: "38%",
        width: "100%",
        marginLeft: "75%", 
    };

    liStyle = {
        display: "inline-block", 
        color: "rgba(255,255,255,.6)",
        marginLeft: "2%", 
        fontSize: "15.2px", 
        fontFamily: "sans-serif",
        textTransform: "uppercase", 
        transition: "all 500ms ease",
        zIndex: "2",
    };

    render() {
        const titles = this.titles;  

        return(
            <React.Fragment>
                <ul style={this.ulStyle}>
                    <li style={this.liStyle}>{titles.Home}</li>
                    <li style={this.liStyle}>{titles.About}</li>
                    <li style={this.liStyle}>{titles.Portfolio}</li>
                    <li style={this.liStyle}>{titles.Contact}</li>
                </ul>
            </React.Fragment>
        ); 
    }
}

export default Navigation; 