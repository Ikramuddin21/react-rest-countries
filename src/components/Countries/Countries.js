import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css';

const Countries = () => {

    const [countries, setCountries] = useState([]);
    useEffect( () => {
        fetch('https://restcountries.com/v2/all')
        .then(res => res.json())
        .then(data => setCountries(data))
    }, []);

    console.log(countries);
    return (
        <div>
            <h1>Rest Countries</h1>
            <div className='countries-container'>
                {
                    countries.map(country => <Country
                        key={country.name} 
                        country={country} 
                    />)
                }
            </div>
        </div>
    );
};

export default Countries;