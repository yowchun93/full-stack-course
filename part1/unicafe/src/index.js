import React from 'react';
import ReactDOM from 'react-dom';
import { useState } from 'react';
import './index.css';

import Statistics from './components/Statistics';

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <React.Fragment>
      <div>
        <h1>Give feedback</h1>
        <button onClick={() => setGood(good + 1)}>good</button>
        <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
        <button onClick={() => setBad(bad + 1)}>bad</button>
      </div>

      <div>
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
        />
      </div>
    </React.Fragment>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))