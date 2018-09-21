import React from "react"; 
import Card from "./Card"; 





const CardList = ({Stores}) => {

    const displayCards = Stores.map((stores, i) => {
        return <Card key={i} id={Stores[i].id} name={Stores[i].name} email={Stores[i].email}/>
 
    })

    return(  
       <React.Fragment>
           {displayCards}
       </React.Fragment>
            ); 
}

export default CardList;

