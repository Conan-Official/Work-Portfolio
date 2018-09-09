import React, {Component} from "react"; 



class Header extends Component {
    render() {
        return(<div className="navigation">
                <h1>React Constructor / State Usage</h1>
                <ul id = "struct">
                    {this.props.list.titles.map((items, i ) => <li key={i}>{items}</li>)}
                </ul> 
        
        </div>); 
    }
}


export default Header; 