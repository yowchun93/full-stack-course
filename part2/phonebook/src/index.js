import React from 'react';
import { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import './index.css';

// npx json-server --port 3001 --watch db.json

const App = () => {
  const [persons, setPersons] = useState([
    {name: 'Arto Hellas'}
  ])
  // this is used for controller form input element
  const [newName, setNewName] = useState('')

  const handleNewName = (event) => {
    setNewName(event.target.value);
  }

  const addNewName = (event) => {
    event.preventDefault();
    const newPerson = {name: newName}
    setPersons(persons.concat(newPerson))
  }

  // use effect hook to get all the names
  useEffect(() => {
    axios.get('http://localhost:3001/persons').then(response => {
      setPersons(response.data)
    })
  })

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addNewName}>
        <div>
          name:
          <input
            value={newName}
            onChange={handleNewName}
          >
          </input>
        </div>
        <div>
          <button
            type="submit"
          >
            add
          </button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person) => {
        return(
          <ul>
            <li>{person.name}</li>
          </ul>
        )
      })}
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))