import React from 'react';
import './Country.css';
const Country = (props) => {
    const {name,capital,population,flag} = props.country;
    const handleAddCountry = props.handleAddCountry
    return (
        <div className="country-container">
            <div className="flag">
                <img src={flag} alt=""/>
            </div>
            <div className="country-info">
                <h3>This is {name}</h3>
                <p><small>Capital is :{capital} </small></p>
                <p><code>Population is: {population}</code></p>
                <button onClick={()=>handleAddCountry(props.country)}>Add country</button>
            </div>
        </div>
    );
};

export default Country;