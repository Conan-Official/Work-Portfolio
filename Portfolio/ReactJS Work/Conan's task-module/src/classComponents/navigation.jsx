import React, {Component} from "react"; 
import SubLogo from "../img/sublogo.png"; 
import NavButton from "../functionalComponents/navButton"; 

class Navigation extends Component {
    render() {
        return(<div className="navigation">
                <img id="sublogo" src={SubLogo} alt="sublogo"></img>
                <NavButton/>
                <ul id="struct">
                {this.props.navList.titles.map((navTitles, index)=> <li key={index}>{navTitles}</li>)}
                </ul>
        </div>); 
    }
}

export default Navigation; 