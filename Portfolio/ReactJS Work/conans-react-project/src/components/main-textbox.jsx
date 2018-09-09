import React, {Component} from "react"; 


class MainTextBox extends Component {
    style = {
        display: "block",
        position: "absolute",  
        background: "rgba(16, 19, 27, 0.9)",
        width: "24.65%",
        height: "620px",
        top: "13.6%",
        marginLeft: ".5%", 
        boxShadow: "0px 0px 20px 3px rgba(0,0,0,.5)",
        borderRadius: "20px",
        zIndex:"-1",
    };

    bg = {
        position: "absolute",
        background: "rgba(70, 79, 94, .2)",
        borderRadius: "10px",
        height: "100px",
        width: "400px",
        marginLeft: "2.2%", 
        textAlign: "center",
        color: "rgba(255,255,255,.55)",
        boxShadow: "0px 0px 10px 3px rgba(0,0,0,.1)",
    };

    h1 = {
      lineHeight: "100px", 
       

    };

    ul = {
       position: "absolute", 
       marginLeft: "13%",
       marginTop: "35%",
       lineHeight: "40px", 
       
       

    };

    li = {
        fontSize: "16px",
        color: "rgba(255,255,255,.5)",
    };

    render() {
        return(<React.Fragment>
                    <div style={this.bg}><h1 style = {this.h1}>Latest Updates</h1></div>
                    
                    <span style={this.style} className ="text_box">
                        <div>
                            <ul style = {this.ul}>
                                <li style={this.li}>Update(8/23/18): Created React App</li>
                                <li style={this.li}>Update(8/24/18): Added CSS file</li>
                                <li style={this.li}>Update(8/25/18): Created Structure Mockup</li>
                                <li style={this.li}>Update(8/26/18): Added Components</li>
                                <li style={this.li}>Update(8/26/18): Added Picture to main-box component</li>
                                <li style={this.li}>Update(8/26/18): Modified CSS Styles</li>
                                <li style={this.li}>Update(8/26/18): Added Latest Updates</li>
                                <li style={this.li}>Update(8/26/18): Added id="Boxes" buttons</li>
                                <li style={this.li}>Update(8/26/18): Added Mini Footer Block</li>

                            </ul>
                        </div>
                    </span>
                </React.Fragment>); 
    }
}

export default MainTextBox; 