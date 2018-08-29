import React, {Component} from "react"; 


class Home extends Component {
    render() {
        return(<div className = "main_showcase">
                
                <h1 id = "main">React Props Usage</h1>
               
                <div id ="movies_box">
                    <h1>Movies</h1>
                    <span className = "container">
                        <ul id="movies">
                            {this.props.favs.movies.map((items, index) => <li key={index}>{items}</li>)}
                        </ul>
                    </span>
                </div>

                <div id ="favorites_box">
                    <h1>Favorite Character</h1>
                    <span className = "container">
                        <ul id ="favorites">
                            {this.props.favs.characters.map((items, i) => <li key={i}>{items}</li>)}
                        </ul>
                    </span>
                </div>

                <div className = "main_block"></div>
                <hr/>


        </div>); 
    }
}

export default Home; 