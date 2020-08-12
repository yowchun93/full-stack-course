import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {
  const { anecdotes } = props

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0));

  const randomInteger = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  // this should return index of the Array instead
  const getMaxOfArray = (array) => {
    return array.indexOf(Math.max(...array));
  }

  const getHighestVotedAnecdote = () => {
    return anecdotes[getMaxOfArray(votes)]
  }

  const createVote = () => {
    // lowest level version of updating values in FP
    const newVotes = [...votes];
    newVotes[selected]++;
    setVotes(newVotes);
  }

  return (
    <React.Fragment>
      <div>
        {anecdotes[selected]}
      </div>
      <button onClick={createVote}>vote</button>
      <button onClick={() => setSelected(randomInteger(0, anecdotes.length - 1))}>next anecdote</button>
      <div>
        Anecdote with most votes
      </div>
      <div>
        {getHighestVotedAnecdote()}
      </div>
    </React.Fragment>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]


ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)