import React from 'react';
import { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const App = () => {
  const [persons, setPersons] = useState([
    {name: 'Arto Hellas'}
  ])
  // this is used for controller form input element
  const [newName, setNewName] = useState('')

  const handleNewName = () => {
    
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: 
          <input
            value={newName} 
            onChange={handleNewName}
          >
          </input>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      ...
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))