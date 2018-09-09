import React, {Component} from "react"; 
import Cirlogo from "../img/circle.png"; 
import ES6 from "../functionComponents/ES6"; 

class MainSec extends Component {
    render() {
        return(<React.Fragment>
            <section className="main_showcase">
                <div className="container">
                    <ES6></ES6>
                    <img id="circlelogo" src={Cirlogo} alt="Cirlogo"/>
                </div>
            </section>
        </React.Fragment>);
    }
}

export default MainSec; 