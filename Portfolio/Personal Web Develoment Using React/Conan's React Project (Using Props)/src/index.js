import React from "react"; 
import ReactDOM from "react-dom"; 
import "./index.css";

/* 
    @author Conan Mafnas
    Title: React Props(properties) Usage Project
    
    Update: Created less markup in index.html and implemented the sturucture 
    within React Components

	<------Notes for props(properties) -------> 
	
	
    Main Class Component  === class Main extends Component
        (obj) = {
            prop:  name: "string",  int, or ["",""], 
        };

        <Ex name = {obj}

    Relative Class Component
    Calling
	
	<Main rendername={obj}/>

    this.props.rendername.name;
    
    or 

    this .props.obj.prop.map((placeholder) => <el>{placeholder}</el>);  

    Note: use key to remove compiling warning 
	
	-------------------------------------------------------------
	
	<--------Validating Props ------------> 
	
	Using Proptypes
	
	Ex: 
	
	ClassName.propTypes = {
			name: React.propTypes.string,  ---> prop requries a string
			age: React.propTypes.number,   ---> prop requries a integer
			information: React.propTypes.object, ----> prop requires a object
	};


------------------------------------------------------------------------*/



/* ----Components---- */
import Navigation from "./components/navigation"; 
import Home from "./components/home"; 



class Main extends React.Component {
    render() {
       
       let navigation = {
          list: ["Home", "About", "Portfolio", "Contact"], 
       };

       let favs = {
           movies: ["Star Wars", "Harry Potter", "Lord of the Rings", "John Wick"],
           characters: ["Luke", "Harry", "Aragorn", "John Wick"], 
       }
       
       
       return(<React.Fragment>
            <Navigation nav={navigation}/>
            <Home favs={favs}/> 
        </React.Fragment>);
    }
}

const destination = document.getElementById("root"); 

ReactDOM.render(<Main/>, destination); 