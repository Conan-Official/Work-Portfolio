import React, {Component} from "react"; 
import Navigation from "./navigation"; 
import MainShowcase from "./mainShowcase"; 

class Main extends Component {
    render() {
        let navList = {
            titles: ["Home", "About", "Portfolio", "Contact"],  
        };
        return(<React.Fragment>
            <div className="loader"></div>
            <Navigation navList={navList}/> 
            <MainShowcase/>
        </React.Fragment>); 
    }
}

export default Main; 