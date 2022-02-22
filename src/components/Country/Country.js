import React from 'react';
import './Country.css';

const Country = (props) => {
    const { name, flag, capital, population} = props.country;

    return (
        <div className='country'>
            <h4>Name: {name}</h4>
            <img src={flag} alt={name} />
            <h5>Capital: {capital}</h5>
            <p>Population: <small>{population}</small></p>
        </div>
    );
};

export default Country;