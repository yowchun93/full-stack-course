import React from 'react';
import { useState, useEffect } from 'react'
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

import Results from './components/Results'

function App() {
  const [countries, setCountries] = useState([])
  const [searchedCountry, setSearchedCountry] = useState('')

  // const [showCountries, setshowCountries] = useState(true)

  const handleSearchCountry = (event) => {
    setSearchedCountry(event.target.value)
  }

  // a function which returns all the countries, but it only runs once, which is a problem
  // const countriesToShow = () => {
  //   if (searchedCountry.length === 0) {
  //     return countries.filter(country => {
  //       return country.name.toLowerCase().includes(searchedCountry.toLowerCase())
  //     })
  //   } else {
  //     return null
  //   }
  // }

  // returning an expression instead?
  const countriesToShow = searchedCountry.length === 0 ? countries
                          : countries.filter(country => country.name.toLowerCase().indexOf(searchedCountry) >= 0)

  // use effect hook to get all the names
  useEffect(() => {
    axios.get('https://restcountries.eu/rest/v2/all').then(response => {
      setCountries(response.data)
    })
  }, [])

  return (
    <React.Fragment>
      <h2>Find countries</h2>
      <form>
        <input
          value={searchedCountry}
          onChange={handleSearchCountry}>
        </input>
      </form>
      <Results
        countriesList={countriesToShow}
      />
    </React.Fragment>
  );
}

export default App;
