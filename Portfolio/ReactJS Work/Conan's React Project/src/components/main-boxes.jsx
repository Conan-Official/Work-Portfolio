import React, {Component} from "react";


class  MainBoxes extends Component {
    styles = {
        
        box1: {
            display: "block", 
            position: "absolute", 
            top: "13.2%",
            marginLeft: "76%",
            height: "180px",
            width: "18%", 
            background: "rgba(16, 19, 27, 0.9)",
            boxShadow: "0px 0px 20px 3px rgba(0,0,0,.5)",
            borderRadius: "15px",
        },

        box2: {
            display: "block", 
            position: "absolute", 
            top: "36.5%",
            marginLeft: "76%",
            height: "180px",
            width: "18%", 
            background: "rgba(16, 19, 27, 0.9)", 
            boxShadow: "0px 0px 20px 3px rgba(0,0,0,.5)",
            borderRadius: "15px",
        },

        box3: {
            display: "block", 
            position: "absolute", 
            top: "60%",
            marginLeft: "76%",
            height: "180px",
            width: "18%", 
            background: "rgba(16, 19, 27, 0.9)",
            boxShadow: "0px 0px 20px 3px rgba(0,0,0,.5)",
            borderRadius: "15px",
        },

        button: {
            display: "block",
            margin: "20% auto",
            padding: "4%",
            width: "50%",
            background: "rgba(0,0,0,.7)",
            outline: "none",
            color: "rgba(255,255,255,.7)",
            border: "1px solid rgba(110,110,110,.5)",
            fontFamily: "sans-serif", 
            textTransform: "uppercase", 
            borderRadius: "8.5px",
            transition: "all 500ms ease",
        },
    };
    render() {
        return(
            <React.Fragment>
                <span style={this.styles.box1}>
                    <button style={this.styles.button}>Our Mission</button>
                </span>
                <span style={this.styles.box2}>
                <button style={this.styles.button}>View Tutorials</button>
                </span>
                <span style={this.styles.box3}>
                <button style={this.styles.button}>Browse Shop</button>
                </span>
            </React.Fragment>
        ); 
    }
}

export default MainBoxes;