import React, {Component} from "react";
import Navigation from "./navigation"; 
import Cols from "./cols"; 
import Banner from "../img/banner.png"; 



class Home extends Component {
    render() {
       let navList = {
            titles: ["Home", "About", "Portfolio", "Content"],    
        };


        return(<React.Fragment>
            <Navigation navList={navList}/>
            <div id = "main_showcase">
            <img id ="banner" src={Banner} alt="banner"></img>
                <div className ="container">
                    <h1>React Design Sample</h1>
                    <Cols title={"Applicant"} sub={"Name: Conan Mafnas"} status={"Searching for Career Opportunities"} btn={"View Profile"}/>
                    <Cols title={"Portfolio"} sub={"Content: Website Gallery"} status={"HTML, CSS, JavaScript/JQuery, React"} btn={"View Portfolio"}/>
                    
                </div>
            </div>
        </React.Fragment>);
    }
}

export default Home;