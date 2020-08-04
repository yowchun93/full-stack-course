import React from 'react'

const Total = (props) => {
  return (
    <p>Number of exercises {props.parts.reduce((acum, part) => {
      return acum + part.exercises
    }, 0)}</p>
  )
}

export default Total;