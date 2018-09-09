import React, {Component} from "react";
import Sublogo from "../img/sublogo.png";
import NavButton from "../functionComponents/navButton.jsx"; 

class Navigation extends Component {
    render() {
        return(<div className="navigation">
            <img src={Sublogo}id="sublogo" alt="sublogo"></img>
            <NavButton/>    
            <ul className="struct">
                {this.props.navList.titles.map((titles, i) => <li key={i}>{titles}</li>)}
            </ul>
        </div>); 
    }
}

export default Navigation; 