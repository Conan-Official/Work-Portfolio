import React, {Component} from "react"; 


class Navigation extends Component {
    render() {
        return(<div className = "navigation">
            <ul className = "struct">
                {this.props.nav.list.map((items, count) => <li key={count}>{items}</li>)};
            </ul>
        </div>); 
    } 
}


export default Navigation; 