import React from 'react';


const PersonCard = ({name, age}) => {
    return (
        <div className = "PersonCard">
            <p>{`My name is ${name}, and I am ${age}`}</p>
        </div>
    );
}

export default PersonCard; 