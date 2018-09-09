import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// Function Component imports 


//Class Components imports 
import Navigation from "./components/navigation.jsx"; 
import MainSec from "./components/mainSec.jsx"; 
import TaskList from "./components/tasklist"; 

// Created variable to define root id
let root = document.getElementById("root");

//Created "Home" class inside main js file for an alternative way to complie and render all Components 
class Home extends React.Component {
    render() {
       
        let navList = {
            titles: ["Home", "About","Portfolio", "Contact"], 
        };

         return(<React.Fragment>
            <TaskList/>
            <Navigation navList={navList}/>      
            <MainSec/> 
             </React.Fragment>); 
    } 
}

/*Can leave untouched because the Home class takes in every component that renders 
to the Virtual DOM then later changes the state of the orginial DOM*/
ReactDOM.render(<React.Fragment>
    <Home/>
</React.Fragment>, root); 
