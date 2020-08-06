import React from 'react';

const Statistics = (props) => {
  const { good, neutral, bad } = props

  const calculatePositive = () => {
    if (good === 0 && neutral === 0 && bad === 0) {
      return "not available yet"
    } else {
      return (good / (good + neutral + bad)) * 100
    }
  }

  return (
    <div>
      <table>
        <tbody>
          <th>
            <td>Statistics</td>
          </th>
          <tr>
            <td>good {good}</td>
          </tr>
          <tr>
            <td>neutral {neutral}</td>
          </tr>
          <tr>
            <td>bad {bad}</td>
          </tr>
          <tr>
            <td>all {good + neutral + bad}</td>
          </tr>
          <tr>
            <td>tdositive {calculatePositive()}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Statistics
