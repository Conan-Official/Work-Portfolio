import React, {Component} from "react"; 
import Header from "./header"; 

class NavigationList extends Component {
    render() {
        let navList = {
            titles: ["Home", "About", "Portfolio", "Contact"],  
        }
        return(<Header list={navList}/>); 
    }
}

export default NavigationList; 