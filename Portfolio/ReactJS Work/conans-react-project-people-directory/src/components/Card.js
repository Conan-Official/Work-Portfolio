import React from "react"; 
import '../css/card.css'; 


const Card = (props) => {
    let {id , name, email} = props;
    return(
    <React.Fragment>
        <div className="card">
            <h2 className ="">{name}</h2>
            <div className = "img">
                <img src={`https://robohash.org/${id}`} alt ="card"></img>
            </div>
            <div className="email">
                <p>Email: {email}</p>
            </div>
        </div>
       
    </React.Fragment>
    
    ); 
}

export default Card; 