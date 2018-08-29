import React, {Component} from "react";


/* ------------ Notes ----------- // 

    @author Conan Mafnas
    Title: Game Functionality

//----Added Constructor that calls for the prop----//

constructor() {
    super(); 
    this.state = {   // State
      number: props.number, //Number prop
    };
}



//----cacheDOM: ----//

let piece = document.querySelector("#piece");


//----Adding the change from the elements orginial state to the state of the props.number (moving element up and down)----// 

let val = this.state.number + "%"; 

piece.style.margin=""+ val +" 46%"; 


//----Created Functions for the game----//
moveup() {
    this.setState({
        number: this.state.number - 1; 
    });
}

movedown () {
    this.setState({
        number: this.state.number + 1; 
    });
}

//----Calling the functions using first the regular function callback for the first function
      Then calling the second function with the ES6 style callback
render() {
    return(
        <button id ="up" onClick={this.moveUp.bind(this)}></button>
        <button id ="down" onClick={() => this.moveDown()}></button>  
    );: 
}



----------------------------*/




class Game extends Component {
    constructor(props) {
        super();
        this.state = {
            number: props.number,
        }   
    }
   
   
    moveDown() {
        let piece = document.querySelector("#piece");
        if (this.state.number <= 0) {
            this.state.number = 3; 
            piece.style.margin="3% 43%";
            
            
        }
        
        if (this.state.number >= 62) {
            piece.style.background="red";
            return;
        }   
        this.setState(
            {number: this.state.number + 3});
        let val = this.state.number + "%"; 
        piece.style.margin=""+ val + "43%";
        console.log(this.state.number);
    }
  
    moveUp() {
        let piece = document.querySelector("#piece");
        if (this.state.number >= 62) {
            this.state.number = 59; 
            piece.style.margin="59% 43%";
           
        }   
        if (this.state.number < 0) {
            piece.style.background="green";
           // piece.style.margin="0% 43%"; 
            return;
        }   
        this.setState(
            {number: this.state.number - 3});
        let val = this.state.number + "%"; 
        piece.style.margin=""+ val + "43%";
        console.log(this.state.number);
   }

    render() {
        return(<React.Fragment>
             <button id = "up" onClick={this.moveUp.bind(this)}>+</button>
             <button id = "down" onClick={() => this.moveDown()}>-</button>
        </React.Fragment>);
    }
}

export default Game; 