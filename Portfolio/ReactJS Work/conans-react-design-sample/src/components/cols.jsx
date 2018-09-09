import React, {Component} from "react"; 


class Cols extends Component {
    render() {
        return(<React.Fragment>
            <div className = "infoBoxes">
                 <h2>{this.props.title}</h2>
                 <p id ="name">
                    <span>{this.props.sub}</span>
                 </p>
                 <p id ="status">
                    <span>{this.props.status}</span>
                 </p>
                 <button id ="button">{this.props.btn}</button>
            </div>
        </React.Fragment>); 
    }
}

export default Cols; 