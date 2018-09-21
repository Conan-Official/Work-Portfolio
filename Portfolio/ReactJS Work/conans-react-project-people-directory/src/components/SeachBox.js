import React from "react"; 
import "../css/input.css";

const SearchBox = ({searchField, searchChange}) => {
    return(
        <React.Fragment>
            <input className="storeSearch" type ="text" placeholder="Search Stores" onChange={searchChange}></input>
        </React.Fragment>
    ); 
}

export default SearchBox; 