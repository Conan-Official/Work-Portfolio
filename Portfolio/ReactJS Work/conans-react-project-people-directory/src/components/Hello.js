import React, {Component} from "react"; 
import '../css/hello.css';


class Hello extends Component {
    render() {
        return(
        <React.Fragment>
            <h1 className ="display-4">{this.props.message}</h1>
        </React.Fragment>); 
    }
}

export default Hello; 