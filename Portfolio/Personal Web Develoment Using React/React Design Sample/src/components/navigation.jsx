import React, {Component} from "react"; 
import logo from "../img/invisioncore12.png"


class Navigation extends Component {
    render() {
        return(<div className="navigation">
                <img id="logo" src={logo} alt="invSubLogo"></img>
                <ul id ="struct">
                {this.props.navList.titles.map((itemsInList, i) => <li key={i}>{itemsInList}</li>)}
                </ul>
        </div>); 
    }
}

export default Navigation; 