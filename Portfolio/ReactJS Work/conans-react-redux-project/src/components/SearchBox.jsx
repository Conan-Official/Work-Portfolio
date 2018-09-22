import React from "react"; 
import '../css/searchBox.css'; 


const SearchBox = ({searchContent}) => {
    return(<input type ="text" placeholder="Search Everywhere" onChange={searchContent} />)
}


export default SearchBox; 

