import React from 'react'; 
import '../css/module.css'; 


const Module = ({title, description, url}) => {
    return(
        <React.Fragment>
            <div className="module">
                <h1>{title}</h1>
                <div className="img">
                    <img src ={url} alt = "module"></img>
                </div>
                <div>
                    <p>{description}</p>
                </div>
            </div>
           

        </React.Fragment>
    );
}

export default Module; 