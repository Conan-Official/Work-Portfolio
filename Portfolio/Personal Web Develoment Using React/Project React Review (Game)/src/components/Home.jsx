import React, {Component} from "react";

import Navigation from "./Navigation"; 
import Game from "./Game";


class Home extends Component {
    render() {

        let navList = {
            titles: ["Home", "About", "Portfolio", "Contact"], 
        }; 

        return(<React.Fragment>
        <Navigation title={"React Project Review"} nav={navList}/> 
            <section id = "main_showcase">
                <div className = "container">
                    <div id ="gameBox">
                        <span id="piece"></span>
                        <Game number={22}/>
                    </div>
                    

                </div>
        </section>
        <span className="section_footer"></span>
        </React.Fragment>); 
    }
}

export default Home; 

