import React, {Component} from "react"; 


class Home extends Component {
    /* --- Notes --- / 

    Important: Never exexute the functions directly within a event handler using the paren "()", 

    Ex: 

    Wrong: <button onClick = {this.increaseNumber().bind(this)}></button> 
           <button onClick = {() => this.increaseNumber()}/></button> 

    Correct: <button onClick = {this.increaseNumber.bind(this)}></button> 
             <button onClick = {() => this.increaseNumber}/></button> 

    Binding the Main class to the desired function
    ----------------------------------------------
    Witin the callback

    1. this.increaseNumber.bind(this); 

    or 

    2. Arrow functions (ES6): () => this.increaseNumber

     --------------------- */
     
    constructor(props) {
        super();
        this.state = {
            number: props.number,
        }
    };

    increaseNumber() {
       this.setState({
           number: this.state.number + 1
       }); 
    };

    decreaseNumber() {
        if (this.state.number <= 0) {
            alert("I'm Sorry you can't go any less than 0");
            return; 
        }
        this.setState({
            number: this.state.number- 1
        }); 
    }

    render() {
        return(<div className ="main_showcase">
                <div className = "container">
                    <h1>React Application using Constructors</h1>
                    <div id ="numberBox">
                        <span id = "number" >{this.state.number}</span>
                        <button id ="add" onClick={this.increaseNumber.bind(this)}>+</button>
                        <button id ="subtract" onClick={() => this.decreaseNumber()}>-</button>
                    </div>
                </div>    
        </div>); 
    }
}

export default Home; 