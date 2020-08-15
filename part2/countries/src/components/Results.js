import React from 'react';

import Country from './Country';

const Results = ({ countriesList }) => {
  if (countriesList === null) {
    return (
      <p>Please search for a country</p>
    )
  } else if (countriesList.length >= 10) {
    return (
      <p>Too many matches, please specify another country</p>
    )
  } else if (countriesList.length === 1) {
    return (
      <Country country={countriesList[0]}/>
    )
  } else {
    return (
      <ul>
        {countriesList.map((country) => {
          return (
            <li key={country.name}>{country.name}</li>
          )
        })}
      </ul>
    )
  }
}

export default Results;