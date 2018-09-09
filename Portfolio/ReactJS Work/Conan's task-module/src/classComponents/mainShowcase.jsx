import React, {Component} from "react"; 
import Circle from "../img/circle.png"; 
import Banner from "../img/banner.png";


class MainShowcase extends Component {
    render() {
        return(<React.Fragment>
            <section id ="main_showcase">
                <img id ="circle" src={Circle} alt="circleLogo"></img>
                <div className="container">
                </div>
                <img id ="banner" src={Banner} alt="banner"></img>
            </section>
        </React.Fragment>); 
    }
}

export default MainShowcase; 