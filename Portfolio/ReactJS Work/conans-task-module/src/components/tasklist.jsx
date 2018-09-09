import React, {Component} from "react"; 
import CloseButton from "../functionComponents/closeButton"; 


class Tasklist extends Component {

    render() {
        return(<div className="loader">
            <div className="taskBox">
                <CloseButton/>
            </div>
        </div>); 
    }
}

export default Tasklist;