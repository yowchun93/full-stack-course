import React from 'react';

const Country = ({ country }) => {

  return (
    <React.Fragment>
      <h1>{country.name}</h1>
      <p>capital {country.capital}</p>
      <p>population {country.population}</p>

      <div>
        <h3>languages</h3>
        <ul>
          {country.languages.map((language) => {
            return (
              <li key={language}>{language.name}</li>
            )
          })}
        </ul>
      </div>
    </React.Fragment>
  )
}

export default Country;