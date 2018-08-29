import React, {Component} from "react"; 


class Navigation extends Component {
   
    render() {

        return(<div id = "navigation">
                <h1>{this.props.title}</h1>
                <ul id = "struct">
                    {this.props.nav.titles.map((listItems, i) => <li key={i}>{listItems}</li>)}
                </ul>
        </div>); 
    }
}

export default Navigation; 