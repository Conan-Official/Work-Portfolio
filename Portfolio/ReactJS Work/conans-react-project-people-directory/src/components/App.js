import React, {Component} from "react"; 
import CardList from "./CardList";
import SearchBox from "./SeachBox";






class App extends Component {
   
    constructor() {
        super()
        this.state =  {
            Stores: [], 
            searchField: '', 
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users').then(response => {
            return response.json();
        }).then(users => {
            this.setState({
                Stores: users, 
            })
        })
      
    }

    onSearchChange = (event) => {
        event.preventDefault();
        this.setState({
            searchField: event.target.value,
        });

    }

    render() {
        const filterStores = this.state.Stores.filter(Stores => {
            return Stores.name.toLowerCase().includes(this.state.searchField.toLowerCase()); 
        })
        if (this.state.Stores.length === 0) {
            return <h1>Loading</h1>
        } else {
            return(
                <React.Fragment>
                     <SearchBox searchChange={this.onSearchChange} /> 
                     <CardList Stores={filterStores}/>
                </React.Fragment>
                  ); 
            }
        }
      
}

export default App; 