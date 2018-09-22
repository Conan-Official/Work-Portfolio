import React from "react"; 
import Module from "./Module";



const ModuleList = ({info}) => {
    
    const displayContent = info.map((items, i) => {
        return(<Module key={i} title={info[i].title} description={info[i].description} url={info[i].url}/>);  
    });

    return(
    <React.Fragment>
        {displayContent}
    </React.Fragment> ); 
}

export default ModuleList;
